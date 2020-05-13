import { call, put } from 'redux-saga/effects';
import keyBy from 'lodash/fp/keyBy';
import { notifications, paths } from '../../../../dictionary';
import { enqueueSnackbar } from '../../../_layout/state/actions';

import * as api from '../../api';
import * as actions from '../actions';


export function* getTemplatesList(action) {
    try {
        const { data } = yield call(api.requestGetTemplates, action.payload);

        const templates = keyBy('id', data);

        yield put(actions.setTemplatesList(templates));
    } catch (error) {
        console.error('getTemplatesList', error);
    }
}
export function* getTemplate(action) {
    try {
        const { data } = yield call(api.requestGetTemplate, action.payload);

        yield put(actions.addSingleTemplate(data));
    } catch (error) {
        console.error('getTemplate', error);
    }
}
export function* addTemplate(action) {
    try {
        const { values, history } = action.payload;

        const { data } = yield call(api.requestPostTemplate, values);

        yield put(enqueueSnackbar({
            message: notifications.confirms.MLTemplateCreated,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));

        history.push(`${paths.templates}/${data.id}`);
    } catch (error) {
        console.error('addTemplate', error);

        yield put(enqueueSnackbar({
            message: notifications.errors.default,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}

export function* deleteTemplate(action) {
    try {
        yield call(api.requestDeleteTemplate, action.payload);

        yield put(enqueueSnackbar({
            message: notifications.confirms.MLTemplateDeleted,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));

        yield put(actions.requestTemplatesList());
    } catch (error) {
        console.error('deleteTemplate', error);

        yield put(enqueueSnackbar({
            message: notifications.errors.default,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}

export function* updateTemplate(action) {
    try {
        const { id, name } = action.payload;
        yield call(api.requestUpdateTemplate, { id, data: { name } });

        yield put(enqueueSnackbar({
            message: notifications.confirms.MLTemplateUpdated,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));
    } catch (error) {
        console.error('updateTemplate', error);

        yield put(enqueueSnackbar({
            message: notifications.errors.default,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}
