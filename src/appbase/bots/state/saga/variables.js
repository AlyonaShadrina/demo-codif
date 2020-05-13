import { call, put } from 'redux-saga/effects';

import { notifications } from '../../../../dictionary';
import getStringFromError from '../../../../utils/getStringFromError';
import { enqueueSnackbar } from '../../../_layout/state/actions';
import * as api from '../../api';
import * as actions from '../actions';


export function* getVariables(action) {
    try {
        const { user_id, bot_id } = action.payload;

        const { data } = yield call(api.requestGetVariables, { user_id, bot_id });

        yield put(actions.setVariables({ data: data.data, bot_id }));
    } catch (error) {
        console.error('getVariables', error);
    }
}

export function* postVariable(action) {
    try {
        const {
            user_id, bot_id, values, successCallback,
        } = action.payload;

        const { data } = yield call(api.requestPostVariable, { user_id, bot_id, data: values });

        yield put(actions.getVariables({ user_id, bot_id }));

        successCallback();

        yield put(enqueueSnackbar({
            message: `"${data.data.label}" ${notifications.confirms.variableCreated}`,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));
    } catch (error) {
        console.error('postVariable', error);

        yield put(enqueueSnackbar({
            message: getStringFromError(error),
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}

export function* updateVariable(action) {
    try {
        const {
            user_id, bot_id, variable_id, values,
        } = action.payload;

        const { data } = yield call(api.requestPatchVariable, {
            user_id,
            bot_id,
            variable_id,
            data: values,
        });

        yield put(actions.getVariables({ user_id, bot_id }));

        yield put(enqueueSnackbar({
            message: `"${data.data.label}" ${notifications.confirms.variableUpdated}`,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));
    } catch (error) {
        console.error('updateVariable', error);

        yield put(enqueueSnackbar({
            message: getStringFromError(error),
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}

export function* deleteVariable(action) {
    try {
        const { user_id, bot_id, variable_id } = action.payload;

        yield call(api.requestDeleteVariable, { user_id, bot_id, variable_id });

        yield put(enqueueSnackbar({
            message: notifications.confirms.variableDeleted,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));

        yield put(actions.getVariables({ user_id, bot_id }));
    } catch (error) {
        console.error('deleteVariable', error);

        yield put(enqueueSnackbar({
            message: getStringFromError(error),
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}
