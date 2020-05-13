import {
    all, call, put, takeLatest,
} from 'redux-saga/effects';

import { notifications } from '../../../dictionary';
import getStringFromError from '../../../utils/getStringFromError';
import { enqueueSnackbar } from '../../_layout/state/actions';
import * as api from '../api';
import * as actions from './actions';
import * as types from './types';


function* getProfile() {
    try {
        const { data } = yield call(api.requestGetProfile);
        yield put(actions.setProfile(data.data));
    } catch (error) {
        console.error('getProfile', error);
    }
}

function* changeProfile(action) {
    try {
        const { avatar, ...restValues } = action.payload;

        yield call(api.requestChangeProfile, restValues);

        console.log('avatar', avatar);

        if (avatar && typeof avatar === 'object') {
            yield call(api.requestChangeAvatar, avatar);
        }

        yield put(enqueueSnackbar({
            message: notifications.confirms.profileUpdated,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));

        yield put(actions.getProfile());
    } catch (error) {
        console.error('changeProfile', error);

        yield put(enqueueSnackbar({
            message: getStringFromError(error),
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}

function* authSaga() {
    yield all([
        yield takeLatest(types.GET_PROFILE_REQUEST, getProfile),
        yield takeLatest(types.CHANGE_PROFILE_REQUEST, changeProfile),
    ]);
}

export default authSaga;
