import * as types from '../types';


export const runBot = (data) => ({
    type: types.REQUEST_RUN_BOT,
    payload: data,
});
export const stopBot = (data) => ({
    type: types.REQUEST_STOP_BOT,
    payload: data,
});
