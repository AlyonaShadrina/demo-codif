import * as types from '../types';


export const requestTemplatesList = (values) => ({
    type: types.GET_TEMPLATES_LIST_REQUEST,
    payload: values,
});
export const setTemplatesList = (values) => ({
    type: types.GET_TEMPLATES_LIST_SUCCESS,
    payload: values,
});
export const addSingleTemplate = (values) => ({
    type: types.GET_TEMPLATE_SUCCESS,
    payload: values,
});

export const requestTemplate = (id) => ({
    type: types.GET_TEMPLATE_REQUEST,
    payload: id,
});

export const requestAddTemplate = (values) => ({
    type: types.ADD_TEMPLATE_REQUEST,
    payload: values,
});

export const requestDeleteTemplate = (values) => ({
    type: types.DELETE_TEMPLATE_REQUEST,
    payload: values,
});

export const requestUpdateTemplate = (values) => ({
    type: types.UPDATE_TEMPLATE_REQUEST,
    payload: values,
});
