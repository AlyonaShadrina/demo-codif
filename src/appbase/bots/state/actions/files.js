import * as types from '../types';


export const getFiles = (data) => ({
    type: types.REQUEST_GET_FILES,
    payload: data,
});
export const uploadFile = (data) => ({
    type: types.REQUEST_UPLOAD_FILE,
    payload: data,
});
export const deleteFile = (data) => ({
    type: types.REQUEST_DELETE_FILE,
    payload: data,
});
export const setUploadedFiles = (data) => ({
    type: types.SET_UPLOADED_FILES,
    payload: data,
});
export const removeFromUploadedFiles = (data) => ({
    type: types.REMOVE_FROM_UPLOADED_FILES,
    payload: data,
});
