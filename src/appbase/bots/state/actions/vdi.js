import * as types from '../types';


export const getAllVdi = () => ({
    type: types.GET_ALL_VDI_REQUEST,
});
export const setAllVdi = (data) => ({
    type: types.GET_ALL_VDI_SUCCESS,
    payload: data,
});
export const updateVdi = (data) => ({
    type: types.UPDATE_VDI_REQUEST,
    payload: data,
});
export const setVdi = (data) => ({
    type: types.UPDATE_VDI_SUCCESS,
    payload: data,
});
export const createVdi = (data) => ({
    type: types.CREATE_VDI_REQUEST,
    payload: data,
});
export const deleteVdi = (data) => ({
    type: types.DELETE_VDI_REQUEST,
    payload: data,
});
