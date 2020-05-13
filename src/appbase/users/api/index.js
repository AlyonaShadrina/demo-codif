import {
    get, post, del, patch,
} from '../../../api/_base';
import { API_URIS } from '../../../config';
import { objToQueryString } from '../../../utils/query';

export const requestGetUsers = (queryObj) => {
    const query = `?${objToQueryString(queryObj)}`;
    return get(API_URIS.admin.users + query);
};

export const requestAddUser = (data) => post(API_URIS.admin.users, data);

export const requestDeleteUser = (data) => del(`${API_URIS.admin.users}/${data}`);

export const requestUpdateUser = ({ values, user_id }) => patch(`${API_URIS.admin.users}/${user_id}`, values);

export const requestGetUser = (id) => get(`${API_URIS.admin.users}/${id}`);
