import axios from 'axios';
import Cookies from 'js-cookie';
import { ML_URI, PROJECT_NAME } from '../config';

const { CancelToken } = axios;

const request = (method, path, data = {}, cancel) => {
    const token = Cookies.get(PROJECT_NAME);

    const headers = {};

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    return (
        axios({
            method,
            url: ML_URI + path,
            data,
            headers,
            cancelToken: new CancelToken((c) => {
                if (cancel) {
                    // eslint-disable-next-line no-param-reassign
                    cancel[0][cancel[1]] = c;
                }
            }),
        })
    )
};

export const get = (path, cancel) => request('get', path, null, cancel);

export const post = (path, data) => request('post', path, data);

export const del = (path) => request('delete', path);

export const put = (path, data) => request('put', path, data);

export const patch = (path, data) => request('patch', path, data);
