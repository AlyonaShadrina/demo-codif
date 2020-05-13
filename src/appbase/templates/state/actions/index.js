import * as types from '../types';

import {
    requestTemplatesList, setTemplatesList, requestTemplate, addSingleTemplate, requestAddTemplate, requestDeleteTemplate, requestUpdateTemplate,
} from './templates';
import {
    requestVariables, setVariablesList, setVariablesToTemplate, requestAddVariable, requestDeleteVariable, requestEditVariable,
} from './variables';

export const uploadFile = (values) => ({
    type: types.UPLOAD_FILE_REQUEST,
    payload: values,
});

export const startAnalyze = (docId) => ({
    type: types.ANALYZE_START_REQUEST,
    payload: docId,
});

export const pollAnalyzeResult = (values) => ({
    type: types.ANALYZE_SET_STARTED,
    payload: values,
});

export const stopPollAnalyzeResult = (values) => ({
    type: types.ANALYZE_SET_STOPPED,
    payload: values,
});

export const setAnalyzeResult = (values) => ({
    type: types.ANALYZE_SET_RESULT,
    payload: values,
});

export {
    requestTemplatesList, setTemplatesList, requestTemplate, addSingleTemplate, requestAddTemplate, requestDeleteTemplate, requestUpdateTemplate,
};
export {
    requestVariables, setVariablesList, setVariablesToTemplate, requestAddVariable, requestDeleteVariable, requestEditVariable,
};

export const requestGetDocument = (values) => ({
    type: types.GET_DOCUMENT_REQUEST,
    payload: values,
});
export const requestGetDocumentsList = (values) => ({
    type: types.GET_DOCUMENTS_LIST_REQUEST,
    payload: values,
});
export const cancelGetDocumentsList = (values) => ({
    type: types.GET_DOCUMENTS_LIST_CANCEL,
    payload: values,
});
export const setDocumentsList = (values) => ({
    type: types.GET_DOCUMENTS_LIST_SUCCESS,
    payload: values,
});
export const requestTrainDocument = (values) => ({
    type: types.TRAIN_DOCUMENT_REQUEST,
    payload: values,
});

export const requestGetRecognize = (values) => ({
    type: types.GET_RECOGNIZE_DOCUMENT_REQUEST,
    payload: values,
});
