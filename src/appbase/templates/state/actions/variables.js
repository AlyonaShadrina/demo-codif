import * as types from '../types';


export const requestVariables = (values) => ({
    type: types.GET_VARIABLES_REQUEST,
    payload: values,
});
export const setVariablesList = (values) => ({
    type: types.GET_VARIABLES_SUCCESS,
    payload: values,
});
export const setVariablesToTemplate = (values) => ({
    type: types.SET_VARIABLES_TO_TEMPLATE,
    payload: values,
});
export const requestAddVariable = (values) => ({
    type: types.ADD_VARIABLE_REQUEST,
    payload: values,
});
export const requestEditVariable = (values) => ({
    type: types.EDIT_VARIABLE_REQUEST,
    payload: values,
});
export const requestDeleteVariable = (values) => ({
    type: types.DELETE_VARIABLE_REQUEST,
    payload: values,
});
