import { post } from '../../../api/_base';
import { API_URIS } from '../../../config';


export const requestLogin = (data) => (post(API_URIS.auth.login, data));

export const requestLogout = () => (post(API_URIS.auth.logout));

export const requestSendContact = (data) => (post(API_URIS.contacts.contacts, data));

export const requestForgotPassword = (data) => (post(API_URIS.auth.forgot, data));
export const requestResetPassword = (data) => (post(API_URIS.auth.reset, data));
