import mapKeys from 'lodash/fp/mapKeys';
import { call, put } from 'redux-saga/effects';
import { notifications } from '../../../../dictionary';
import getStringFromError from '../../../../utils/getStringFromError';
import { enqueueSnackbar } from '../../../_layout/state/actions';
import * as api from '../../api';
import * as actions from '../actions';


export function* getFiles(action) {
    try {
        const { user_id, bot_id } = action.payload;

        const { data } = yield call(api.requestGetFiles, { user_id, bot_id });

        yield put(actions.setUploadedFiles({ bot_id, data: data.data }));
    } catch (error) {
        console.error('getFiles', error.response);
    }
}
export function* requestUploadFile(action) {
    try {
        const { user_id, bot_id, file } = action.payload;

        const { data } = yield call(api.requestUploadFile, { user_id, bot_id, file });

        yield put(enqueueSnackbar({
            message: notifications.confirms.fileUploaded,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));

        yield put(actions.getFiles({ user_id, bot_id }));
    } catch (error) {
        console.error('requestUploadFile', error.response);

        yield put(enqueueSnackbar({
            message: error.response.data.errors.file[0] || notifications.errors.default,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}

export function* requestDeleteFile(action) {
    try {
        const { user_id, bot_id, file_id } = action.payload;

        yield call(api.requestDeleteFile, { user_id, bot_id, file_id });

        yield put(actions.getFiles({ user_id, bot_id }));

        yield put(enqueueSnackbar({
            message: notifications.confirms.fileDeleted,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));
    } catch (error) {
        console.error('requestDeleteFile', error);

        // const { url } = error.response.config;
        // const user_id = url.match(/users\/(.*?)\//)[1];
        // const bot_id = url.match(/bots\/(.*?)\//)[1];

        if (error.response.status !== 404) {
            yield put(enqueueSnackbar({
                message: getStringFromError(error),
                options: {
                    key: new Date().getTime() + Math.random(),
                    variant: 'error',
                },
            }));
        } else {
            // yield put(actions.getFiles({ user_id, bot_id }));
        }
    }
}
