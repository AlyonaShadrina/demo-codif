import axios from 'axios';
import Cookies from 'js-cookie';
import { BASE_API_URI, PROJECT_NAME } from '../config';

const request = (method, path, data = {}) => {
    const token = Cookies.get(PROJECT_NAME);

    const headers = {};

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    return (
        axios({
            method,
            url: BASE_API_URI + path,
            data,
            headers,
        })
    );
};

export const get = (path) => request('get', path);

export const post = (path, data) => request('post', path, data);

export const del = (path) => request('delete', path);

export const put = (path, data) => request('put', path, data);

export const patch = (path, data) => request('patch', path, data);
