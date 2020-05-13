import keyBy from 'lodash/fp/keyBy';
import { all, call, put, takeLatest, delay, race, take } from "redux-saga/effects";
import { notifications, paths } from '../../../../dictionary';
import { enqueueSnackbar, closeSnackbar } from '../../../_layout/state/actions';

import * as api from '../../api';
import * as actions from '../actions';
import * as types from '../types';

import { getTemplatesList, getTemplate, addTemplate, deleteTemplate, updateTemplate } from './templates';
import { getVariables, addVariable, deleteVariable, editVariable } from './variables';

const cancels = {
    getDocumentsList: null,
};

function* uploadFile(action) {
    try {
        const { file, history, templateId } = action.payload;
        const actionPath = action.payload.action;
        const { data } = yield call(api.requestUploadFile, file);

        yield put(actions.requestGetDocument(data.id));

        yield put(actions.startAnalyze({ id: data.id, history, action: actionPath, templateId }));

    } catch (error) {
        console.error('uploadFile', error);
    }
}

function* startAnalyze(action) {
    try {
        const { id, history, templateId } = action.payload;
        const actionPath = action.payload.action;
        const response = yield call(api.requestStartAnalyze, id);
        if (response.status === 202) {
            // we had to race to stop polling in case component unmount (user don't want to wait anymore)
            const { result } = yield race({
                result: call(pollAnalyzeResult, { payload: { id, history, action: actionPath, templateId } }),
                cancel: take(types.ANALYZE_SET_STOPPED),
            });

            if (result) {
                yield put(actions.setAnalyzeResult(result));
                history.push(`${paths.templates}/${templateId}/${actionPath}/${id}`);
            }
        }
    } catch (error) {
        console.error('startAnalyze', error);
    }
}
function* pollAnalyzeResult(action) {
    try {
        const { id } = action.payload;
        let analyzed = null;
        let analyzedDocument = null;
        while (!analyzed) {
            // console.log('pollAnalyzeResult')
            const { data } = yield call(api.requestGetDocument, id);
            analyzed = data.analysis;
            if (!analyzed) {
                yield yield delay(5000);
            } else {
                analyzedDocument = data;
            }
        }
        return analyzedDocument
        // yield put(actions.setAnalyzeResult(analyzedDocument));
        // history.push(`${paths.templates}/${templateId}/${actionPath}/${id}`);
    } catch (error) {
        console.error('pollAnalyzeResult', error);
    }
}

function* getDocument(action) {
    try {
        const { data } = yield call(api.requestGetDocument, action.payload);
        yield put(actions.setAnalyzeResult(data));

    } catch (error) {
        console.error('getDocument', error);
    }
}
function* cancelGetDocumentsList(action) {
    try {
        cancels.getDocumentsList();
    } catch (error) {
        console.error('cancelGetDocumentsList', error);
    }
}
function* getDocumentsList(action) {
    try {
        const { data } = yield call(api.requestGetDocumentsList, { query: action.payload, cancel: [cancels, 'getDocumentsList'] }, );

        const documents = keyBy('id', data);

        yield put(actions.setDocumentsList(documents));

    } catch (error) {
        console.error('getDocumentsList', error);
    }
}

function* trainDocument(action) {
    try {
        const { document_id, template_id, variables } = action.payload;
        // console.log('trainDocument', variables)

        for (let i = 0; i < variables.length; i++) {
            yield call(api.requestEditVariable, {
                values: {
                    meta: {
                        coords: variables[i].region,
                        selected_text: variables[i].text,
                        region_num: variables[i].region_num,
                        keywords: 'whatever',
                    },
                    template_id,
                    page_num: parseInt(variables[i].page_num),
                },
                varId: variables[i].id,
            });
        }

        yield call(api.requestTrainDocument, { document_id, template_id });

        yield put(enqueueSnackbar({
            message: notifications.confirms.MlDocumentTrained,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));

    } catch (error) {
        console.error('trainDocument', error);
        yield put(enqueueSnackbar({
            message: notifications.errors.default,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}

function* getRecognizeDocument(action) {
    try {
        const infoKey = new Date().getTime() + Math.random()
        yield put(enqueueSnackbar({
            message: notifications.confirms.MlDocumentGetRecognize,
            options: {
                key: infoKey,
                variant: 'info',
                persist: true,
            },
        }));

        const { data } = yield call(api.requestGetRecognizeDocument, action.payload);

        yield put(actions.setAnalyzeResult(data));

        yield put(closeSnackbar(infoKey));

    } catch (error) {
        console.error('getDocument', error);
    }
}

function* templatesSaga() {
    yield all([
        yield takeLatest(types.GET_TEMPLATES_LIST_REQUEST, getTemplatesList),
        yield takeLatest(types.GET_TEMPLATE_REQUEST, getTemplate),
        yield takeLatest(types.ADD_TEMPLATE_REQUEST, addTemplate),
        yield takeLatest(types.DELETE_TEMPLATE_REQUEST, deleteTemplate),
        yield takeLatest(types.UPDATE_TEMPLATE_REQUEST, updateTemplate),
        yield takeLatest(types.UPLOAD_FILE_REQUEST, uploadFile),
        yield takeLatest(types.ANALYZE_START_REQUEST, startAnalyze),
        yield takeLatest(types.ANALYZE_SET_STARTED, pollAnalyzeResult),
        yield takeLatest(types.GET_VARIABLES_REQUEST, getVariables),
        yield takeLatest(types.ADD_VARIABLE_REQUEST, addVariable),
        yield takeLatest(types.EDIT_VARIABLE_REQUEST, editVariable),
        yield takeLatest(types.DELETE_VARIABLE_REQUEST, deleteVariable),
        yield takeLatest(types.GET_DOCUMENT_REQUEST, getDocument),
        yield takeLatest(types.GET_DOCUMENTS_LIST_REQUEST, getDocumentsList),
        yield takeLatest(types.GET_DOCUMENTS_LIST_CANCEL, cancelGetDocumentsList),
        yield takeLatest(types.TRAIN_DOCUMENT_REQUEST, trainDocument),
        yield takeLatest(types.GET_RECOGNIZE_DOCUMENT_REQUEST, getRecognizeDocument),
    ]);
}

export default templatesSaga