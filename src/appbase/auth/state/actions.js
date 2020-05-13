import * as types from './types';
import { notifications } from '../../../dictionary';

// login
export const requestLogin = (values) => ({
    type: types.REQUEST_LOGIN,
    payload: values,
});
export const setAuthTokenAC = (token) => ({
    type: types.SET_AUTH_TOKEN,
    payload: { token },
});
export const setAuthErrorAC = (message) => ({
    type: types.SET_AUTH_ERROR,
    payload: message,
});
export const removeAuthTokenAC = () => ({
    type: types.REMOVE_AUTH_TOKEN,
});
export const logout = () => ({
    type: types.REQUEST_LOGOUT,
});

// forgot password
export const requestForgotPassword = (values) => ({
    type: types.REQUEST_FORGOT_PASSWORD,
    payload: values,
});
export const setForgotPasswordAC = () => ({
    type: types.SET_FORGOT_PASSWORD_SENT,
    payload: notifications.confirms.done,
});
export const setForgotPasswordErrorAC = (message) => ({
    type: types.SET_FORGOT_PASSWORD_ERROR,
    payload: message,
});

// reset password
export const requestResetPassword = (values) => ({
    type: types.REQUEST_RESET_PASSWORD,
    payload: values,
});

// contact
export const requestContact = (values) => ({
    type: types.REQUEST_CONTACT,
    payload: values,
});
export const setContactSentAC = () => ({
    type: types.SET_CONTACT_SENT,
    payload: notifications.confirms.done,
});
export const setContactErrorAC = (message) => ({
    type: types.SET_CONTACT_ERROR,
    payload: message,
});
