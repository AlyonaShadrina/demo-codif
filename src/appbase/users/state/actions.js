import * as types from './types';

export const getUsers = (values) => ({
    type: types.GET_USERS_REQUEST,
    payload: values,
});
export const setUsers = (values) => ({
    type: types.GET_USERS_SUCCESS,
    payload: values,
});

export const getUsersForManager = (values) => ({
    type: types.GET_USERS_FOR_MANAGER_REQUEST,
    payload: values,
});
export const setUsersForManager = (values) => ({
    type: types.GET_USERS_FOR_MANAGER_SUCCESS,
    payload: values,
});

export const getManagersForUserCreation = (values) => ({
    type: types.GET_MANAGERS_FOR_USER_CREATION_REQUEST,
    payload: values,
});
export const setManagersForUserCreation = (values) => ({
    type: types.GET_MANAGERS_FOR_USER_CREATION_SUCCESS,
    payload: values,
});

export const addUser = (values) => ({
    type: types.ADD_USER_REQUEST,
    payload: values,
});
export const deleteUser = (values) => ({
    type: types.DELETE_USER_REQUEST,
    payload: values,
});
export const updateUser = (values) => ({
    type: types.UPDATE_USER_REQUEST,
    payload: values,
});
export const setUser = (values) => ({
    type: types.UPDATE_USER_SUCCESS,
    payload: values,
});
export const getUser = (values) => ({
    type: types.GET_USER_REQUEST,
    payload: values,
});
