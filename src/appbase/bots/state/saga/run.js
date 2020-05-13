import { call, put } from 'redux-saga/effects';

import getStringFromError from '../../../../utils/getStringFromError';
import { enqueueSnackbar } from '../../../_layout/state/actions';
import * as api from '../../api';
import { notifications } from '../../../../dictionary';
import * as actions from '../actions';

export function* runBot(action) {
    try {
        const { user_id, bot_id } = action.payload;

        yield call(api.requestRunBot, { user_id, bot_id });

        yield put(actions.getBot({ user_id, bot_id }));

        yield put(enqueueSnackbar({
            message: notifications.confirms.botRunStart,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));
    } catch (error) {
        console.error('runBot', error);

        yield put(enqueueSnackbar({
            message: getStringFromError(error),
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}

export function* stopBot(action) {
    try {
        const { user_id, bot_id } = action.payload;

        yield call(api.requestStopBot, { user_id, bot_id });

        yield put(actions.getBot({ user_id, bot_id }));

        yield put(enqueueSnackbar({
            message: notifications.confirms.botRunStop,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));
    } catch (error) {
        console.error('stopBot', error);

        yield put(enqueueSnackbar({
            message: getStringFromError(error),
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}
