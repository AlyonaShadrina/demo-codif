import Cookies from 'js-cookie';
import { PROJECT_NAME } from '../../../config';
import * as types from './types';


const initialState = {
    token: Cookies.get(PROJECT_NAME) || null,
    error: null,
    forgot_loading: false,
    forgot_error: null,
    forgot_sent: null,
    contact_loading: false,
    contact_error: null,
    contact_sent: null,
};

export default function authReducer(state = initialState, { type, payload }) {
    switch (type) {
    // login
    case types.SET_AUTH_TOKEN:
        return {
            ...state,
            ...payload,
            error: null,
        };
    case types.SET_AUTH_ERROR:
        return {
            ...state,
            error: payload,
        };
    case types.REMOVE_AUTH_TOKEN:
        return {
            token: null,
        };

    // forgot password
    case types.REQUEST_FORGOT_PASSWORD:
        return {
            ...state,
            forgot_loading: true,
            forgot_error: null,
            forgot_sent: null,
        };
    case types.SET_FORGOT_PASSWORD_ERROR:
        return {
            ...state,
            forgot_loading: false,
            forgot_error: payload,
            forgot_sent: null,
        };
    case types.SET_FORGOT_PASSWORD_SENT:
        return {
            ...state,
            forgot_loading: false,
            forgot_error: null,
            forgot_sent: payload,
        };

    // contact
    case types.REQUEST_CONTACT:
        return {
            ...state,
            contact_loading: true,
            contact_error: null,
            contact_sent: null,
        };
    case types.SET_CONTACT_ERROR:
        return {
            ...state,
            contact_loading: false,
            contact_error: payload,
            contact_sent: null,
        };
    case types.SET_CONTACT_SENT:
        return {
            ...state,
            contact_loading: false,
            contact_error: null,
            contact_sent: payload,
        };
    default:
        return state;
    }
}
