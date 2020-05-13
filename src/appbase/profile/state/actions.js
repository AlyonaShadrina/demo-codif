import * as types from './types';


export const getProfile = () => ({
    type: types.GET_PROFILE_REQUEST,
});

export const setProfile = (data) => ({
    type: types.GET_PROFILE_SUCCESS,
    payload: data,
});

export const updateProfile = (data) => ({
    type: types.CHANGE_PROFILE_REQUEST,
    payload: data,
});
