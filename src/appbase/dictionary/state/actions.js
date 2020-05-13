import * as types from './types';


export const getVariableTypesDictML = () => ({
    type: types.DICT_VARIABLE_TYPES_REQUEST_ML,
});
export const getVariableTypesDict = () => ({
    type: types.DICT_VARIABLE_TYPES_REQUEST,
});

export const setVariableTypesDictML = (data) => ({
    type: types.DICT_VARIABLE_TYPES_SUCCESS_ML,
    payload: data,
});
export const setVariableTypesDict = (data) => ({
    type: types.DICT_VARIABLE_TYPES_SUCCESS,
    payload: data,
});
