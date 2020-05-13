import Cookies from 'js-cookie';
import {
    all, call, put, takeLatest,
} from 'redux-saga/effects';

import { PROJECT_NAME } from '../../../config';
import getStringFromError from '../../../utils/getStringFromError';
import * as api from '../api';
import * as actions from './actions';
import * as types from './types';


function* logIn(action) {
    try {
        const { values, history } = action.payload;
        const { data } = yield call(api.requestLogin, values);
        Cookies.set(PROJECT_NAME, data.token, { expires: 30 });
        yield put(actions.setAuthTokenAC(data.token));
        history.push('/');
    } catch (error) {
        console.error('logIn', error);
        yield put(actions.setAuthErrorAC(getStringFromError(error)));
    }
}

function* forgotPassword(action) {
    try {
        yield call(api.requestForgotPassword, action.payload);
        yield put(actions.setForgotPasswordAC());
    } catch (error) {
        console.error('forgotPassword', error);
        yield put(actions.setForgotPasswordErrorAC(getStringFromError(error)));
    }
}

function* resetPassword(action) {
    try {
        const { data } = yield call(api.requestResetPassword, action.payload);
    } catch (error) {
        console.error('resetPassword', error);
        yield put(actions.setForgotPasswordErrorAC(getStringFromError(error)));
    }
}

function* logOut() {
    try {
        yield call(api.requestLogout);
        Cookies.remove(PROJECT_NAME);
        window.location = '/';
        yield put(actions.removeAuthTokenAC());
    } catch (error) {
        console.error('logOut', error);
    }
}

function* sendContact(action) {
    try {
        yield call(api.requestSendContact, action.payload);
        yield put(actions.setContactSentAC());
    } catch (error) {
        console.error('sendContact', error);
        yield put(actions.setContactErrorAC(getStringFromError(error)));
    }
}


function* authSaga() {
    yield all([
        yield takeLatest(types.REQUEST_LOGIN, logIn),
        yield takeLatest(types.REQUEST_LOGOUT, logOut),
        yield takeLatest(types.REQUEST_FORGOT_PASSWORD, forgotPassword),
        yield takeLatest(types.REQUEST_RESET_PASSWORD, resetPassword),
        yield takeLatest(types.REQUEST_CONTACT, sendContact),
    ]);
}

export default authSaga;
