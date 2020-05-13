import * as types from '../types';


export const getUsersForBotCreation = (data) => ({
    type: types.GET_USERS_FOR_BOT_CREATION_REQUEST,
    payload: data,
});
export const getUsersForBotUpdate = (data) => ({
    type: types.GET_USERS_FOR_BOT_UPDATE_REQUEST,
    payload: data,
});

export const setUsersForBotCreation = (data) => ({
    type: types.GET_USERS_FOR_BOT_CREATION_SUCCESS,
    payload: data,
});
export const setUsersForBotUpdate = (data) => ({
    type: types.GET_USERS_FOR_BOT_UPDATE_SUCCESS,
    payload: data,
});

export const getAdminBotList = (data) => ({
    type: types.REQUEST_GET_ADMIN_BOT_LIST,
    payload: data,
});
export const setAdminBotList = (data) => ({
    type: types.SET_ADMIN_BOT_LIST,
    payload: data,
});

export const getUserBotStatuses = (data) => ({
    type: types.REQUEST_GET_USER_BOT_STATUSES,
    payload: data,
});

export const setUserBotStatuses = (data) => ({
    type: types.SET_USER_BOT_STATUSES,
    payload: data,
});

export const getBotsWithStatus = (data) => ({
    type: types.REQUEST_GET_BOTS_WITH_STATUS,
    payload: data,
});
export const setBots = (data) => ({
    type: types.SET_BOTS_WITH_STATUS,
    payload: data,
});

export const getBot = (data) => ({
    type: types.REQUEST_GET_BOT,
    payload: data,
});
export const setBot = (data) => ({
    type: types.SET_CURRENT_BOT,
    payload: data,
});

export const updateBot = (data) => ({
    type: types.REQUEST_UPDATE_BOT,
    payload: data,
});

export const updateBotVdi = (data) => ({
    type: types.UPDATE_BOT_VDI_REQUEST,
    payload: data,
});

export const updateBotTime = (data) => ({
    type: types.REQUEST_UPDATE_BOT_TIME,
    payload: data,
});

export const updateBotUsers = (data) => ({
    type: types.REQUEST_UPDATE_BOT_USERS,
    payload: data,
});

export const createBot = (data) => ({
    type: types.REQUEST_CREATE_BOT,
    payload: data,
});
export const deleteBot = (data) => ({
    type: types.REQUEST_DELETE_BOT,
    payload: data,
});

export const getBotStatistics = (data) => ({
    type: types.REQUEST_GET_BOT_STATISTICS,
    payload: data,
});
export const setBotStatistics = (data) => ({
    type: types.SET_BOT_STATISTICS,
    payload: data,
});
