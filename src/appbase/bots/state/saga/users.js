import { call, put } from 'redux-saga/effects';
import keyBy from 'lodash/fp/keyBy';

import * as api from '../../api';
import * as actions from '../actions';


export function* getUsersForBotCreation(action) {
    try {
        const { data } = yield call(api.requestGetUsersForBotCreation, action.payload);

        const users = keyBy('id', data.data);

        yield put(actions.setUsersForBotCreation(users));
    } catch (error) {
        console.error('getUsersForBotCreation', error);
    }
}

export function* getUsersForBotUpdate(action) {
    try {
        const { data } = yield call(api.requestGetUsersForBotCreation, action.payload);

        const users = keyBy('id', data.data);

        yield put(actions.setUsersForBotUpdate(users));
    } catch (error) {
        console.log('getUsersForBotCreation', error);
    }
}
