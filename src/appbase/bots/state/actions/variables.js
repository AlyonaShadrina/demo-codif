import * as types from '../types';


export const getVariables = (data) => ({
    type: types.REQUEST_GET_VARIABLES,
    payload: data,
});
export const setVariables = (data) => ({
    type: types.SET_VARIABLES,
    payload: data,
});
export const createVariable = (data) => ({
    type: types.REQUEST_CREATE_VARIABLE,
    payload: data,
});
export const updateVariable = (data) => ({
    type: types.REQUEST_UPDATE_VARIABLE,
    payload: data,
});
export const deleteVariable = (data) => ({
    type: types.REQUEST_DELETE_VARIABLE,
    payload: data,
});
