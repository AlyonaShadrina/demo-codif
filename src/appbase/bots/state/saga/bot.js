import { call, put } from '@redux-saga/core/effects';
import keyBy from 'lodash/fp/keyBy';
import keys from 'lodash/fp/keys';
import mapKeys from 'lodash/fp/mapKeys';
import { reset } from 'redux-form';

import { notifications, paths } from '../../../../dictionary';
import getStringFromError from '../../../../utils/getStringFromError';
import { enqueueSnackbar } from '../../../_layout/state/actions';
import * as api from '../../api';
import * as actions from '../actions';


export function* getAdminBotList(action) {
    try {
        const { data } = yield call(api.requestGetAdminBotList, action.payload);

        const reducedData = data.data;

        reducedData.map((reduced) => {
            mapKeys((reducedKey) => {
                if (reduced[reducedKey] && reduced[reducedKey].data) {
                    reduced[reducedKey] = reduced[reducedKey].data;
                }
            }, reduced);
        });

        const bots = keyBy('id', reducedData);

        yield put(actions.setAdminBotList({ data: bots, meta: data.meta }));
    } catch (error) {
        console.error('getUserBotStatuses', error);
    }
}

export function* getUserBotStatuses(action) {
    try {
        const id = action.payload;

        const { data } = yield call(api.requestGetUserBotStatuses, id);

        yield put(actions.setUserBotStatuses(data));
    } catch (error) {
        console.error('getUserBotStatuses', error);
    }
}

export function* getBotsWithStatus(action) {
    try {
        const { id, statusObj } = action.payload;

        const { data } = yield call(api.requestGetBotsWithStatus, { id, status: statusObj.code });

        const bots = keyBy('id', data.data);
        const botsId = keys(bots);

        yield put(actions.setBots({
            bots: { data: bots, meta: data.meta },
            status: statusObj.code,
            botsId,
        }));
    } catch (error) {
        console.error('getBotsWithStatus', error);
    }
}

export function* getBot(action) {
    try {
        const { user_id, bot_id } = action.payload;

        const { data } = yield call(api.requestGetBot, { user_id, bot_id });

        const reducedData = data.data;

        mapKeys((key) => {
            if (reducedData[key] && reducedData[key].data) {
                reducedData[key] = reducedData[key].data;
            }
        }, reducedData);

        yield put(actions.setBot(reducedData));
    } catch (error) {
        console.error('getBot', error);
    }
}

export function* updateBot(action) {
    try {
        const {
            user_id, bot_id, values, history,
        } = action.payload;

        const { variables, start_datetime, ...restValues } = values;

        if (start_datetime || start_datetime === null) {
            yield call(api.requestScheduleBot, { user_id, bot_id, data: { start_datetime } });
        }

        if (restValues && Object.keys(restValues).length > 0) {
            yield call(api.requestUpdateBot, { user_id, bot_id, data: restValues });
        }

        // update store after data posted
        // if we updated user_id - redirect
        if (restValues.user_id) {
            history.push(`${paths.users}/${restValues.user_id}${paths.bots}/${bot_id}`);
            yield put(actions.getBot({ user_id: restValues.user_id, bot_id }));
        } else {
            yield put(actions.getBot({ user_id, bot_id }));
        }

        yield put(enqueueSnackbar({
            message: notifications.confirms.botUpdated,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));
    } catch (error) {
        console.error('updateBot', error);

        yield put(enqueueSnackbar({
            message: getStringFromError(error),
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}

export function* updateBotTime(action) {
    try {
        const { user_id, bot_id, values } = action.payload;

        yield call(api.requestScheduleBot, { user_id, bot_id, data: values });

        yield put(enqueueSnackbar({
            message: notifications.confirms.botScheduled,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));
    } catch (error) {
        console.error('updateBotTime', error);

        yield put(enqueueSnackbar({
            message: getStringFromError(error),
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}

export function* updateBotUsers(action) {
    try {
        const {
            bot_id, values, history, currentPageUser, form,
        } = action.payload;

        yield call(api.requestUpdateBotUsers, { bot_id, data: values });

        if (currentPageUser && !values.user_ids.includes(parseInt(currentPageUser))) {
            history.push(`${paths.users}/${values.user_ids[0]}${paths.bots}/${bot_id}`);
        }

        if (form) {
            yield put(reset(form));
        }

        yield put(enqueueSnackbar({
            message: notifications.confirms.botUsersUpdated,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));
    } catch (error) {
        console.error('updateBotUsers', error);

        yield put(enqueueSnackbar({
            message: getStringFromError(error),
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}

export function* createBot(action) {
    try {
        const { values, history } = action.payload;

        const { data } = yield call(api.requestCreateBot, values);

        yield put(actions.setBot(data.data));

        history.push(`${paths.users}/${values.user_ids[0]}${paths.bots}/${data.data.id}`);
    } catch (error) {
        console.error('createBot', error);
    }
}

export function* deleteBot(action) {
    try {
        const { user_id, bot_id, history } = action.payload;

        yield call(api.requestDeleteBot, { user_id, bot_id });

        history.push('/');

        yield put(actions.setBot({}));
    } catch (error) {
        console.error('deleteBot', error);
    }
}

export function* requestBotStatistics(action) {
    try {
        const { user_id, bot_id, on_last_days } = action.payload;

        const { data } = yield call(api.requestBotStatistics, {
            user_id,
            bot_id,
            data: on_last_days,
        });

        yield put(actions.setBotStatistics({ data: { data, on_last_days }, bot_id }));
    } catch (error) {
        console.error('requestBotStatistics', error);
    }
}
