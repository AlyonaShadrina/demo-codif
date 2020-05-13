import { call, put } from '@redux-saga/core/effects';
import keyBy from 'lodash/fp/keyBy';
import { reset } from 'redux-form';

import getStringFromError from '../../../../utils/getStringFromError';
import { reduxFormNames } from '../../../../config';
import { notifications } from '../../../../dictionary';
import { enqueueSnackbar } from '../../../_layout/state/actions';
import * as api from '../../api';
import {
    requestCreateVdi,
    requestDeleteVdi,
    requestGetAllVdi,
    requestUpdateVdi,
} from '../../api/vdi';
import * as actions from '../actions/vdi';
import { getBot } from '../actions';


export function* getAllVdi() {
    try {
        const { data } = yield call(requestGetAllVdi);

        const vdi = keyBy('id', data.data);

        yield put(actions.setAllVdi(vdi));
    } catch (error) {
        console.error('getAllVdi', error);
    }
}

export function* updateVdi(action) {
    try {
        const { values } = action.payload;

        const { id, app_name } = values;

        const { data } = yield call(requestUpdateVdi, { vdi_id: id, values });

        yield put(actions.setVdi(data.data));

        yield put(enqueueSnackbar({
            message: `${app_name} ${notifications.confirms.vdiUpdated}`,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));
    } catch (error) {
        console.error('updateVdi', error);

        yield put(enqueueSnackbar({
            message: getStringFromError(error),
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}

export function* createVdi(action) {
    try {
        const { app_name } = action.payload;

        yield call(requestCreateVdi, action.payload);

        yield put(actions.getAllVdi());
        yield put(reset(reduxFormNames.addVdi));

        yield put(enqueueSnackbar({
            message: `${app_name || ''} ${notifications.confirms.vdiCreated}`,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));
    } catch (error) {
        console.error('createVdi', error);

        yield put(enqueueSnackbar({
            message: getStringFromError(error),
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}

export function* deleteVdi(action) {
    try {
        yield call(requestDeleteVdi, action.payload);

        yield put(actions.getAllVdi());

        yield put(enqueueSnackbar({
            message: notifications.confirms.vdiDeleted,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));
    } catch (error) {
        console.error('deleteVdi', error);

        yield put(enqueueSnackbar({
            message: getStringFromError(error),
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}


export function* updateBotVdi(action) {
    try {
        const { user_id, bot_id, values } = action.payload;

        yield call(api.requestUpdateBotVdi, { user_id, bot_id, data: values });

        yield put(getBot({ user_id, bot_id }));

        yield put(enqueueSnackbar({
            message: notifications.confirms.botVdiUpdated,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));
    } catch (error) {
        console.error('updateBotVdi', error);

        yield put(enqueueSnackbar({
            message: getStringFromError(error),
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}
