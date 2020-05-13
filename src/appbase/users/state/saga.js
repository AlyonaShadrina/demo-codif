import keyBy from 'lodash/fp/keyBy';
import keys from 'lodash/fp/keys';
import groupBy from 'lodash/fp/groupBy';
import {
    all, call, put, takeLatest, takeEvery,
} from 'redux-saga/effects';

import getStringFromError from '../../../utils/getStringFromError';
import { enqueueSnackbar } from '../../_layout/state/actions';
import * as api from '../api';
import * as actions from './actions';
import * as types from './types';


function* getUsers(action) {
    try {
        const { data } = yield call(api.requestGetUsers, action.payload);

        const role = action.payload['filter[role]'].split(',');

        const groupedByRole = groupBy((b) => b.role, data.data);

        if (!Object.keys(groupedByRole).length) {
            for (let i = 0; i < role.length; i++) {
                yield put(actions.setUsers(
                    { users: {}, usersId: { idList: [], meta: data.meta }, role: role[i] },
                ));
            }
        } else {
            for (let i = 0; i < Object.keys(groupedByRole).length; i++) {
                const roleArray = groupedByRole[role[i]];
                const usersId = (roleArray || []).map((user) => user.id);

                const users = keyBy('id', roleArray);

                yield put(actions.setUsers(
                    { users, usersId: { idList: usersId, meta: data.meta }, role: role[i] },
                ));
            }
        }
    } catch (error) {
        console.error('getUsers', error);
    }
}

function* getUsersForManager(action) {
    try {
        const { data } = yield call(api.requestGetUsers, { 'filter[role]': 'user', 'filter[manager_id]': action.payload });

        const users = keyBy('id', data.data);
        const usersId = keys(users);

        yield put(actions.setUsersForManager(
            { users, usersId, managerId: action.payload },
        ));
    } catch (error) {
        console.error('getUsersForManager', error);
    }
}
function* getManagersForUserCreation(action) {
    try {
        const { data } = yield call(api.requestGetUsers, { 'filter[role]': 'manager' });

        const managers = keyBy('id', data.data);
        const ids = keys(managers);

        yield put(actions.setManagersForUserCreation(
            { managers, ids },
        ));
    } catch (error) {
        console.error('getManagersForUserCreation', error);
    }
}

function* addUser(action) {
    try {
        const { values, query } = action.payload;
        const { first_name, last_name, role } = values;

        yield call(api.requestAddUser, values);

        yield put(enqueueSnackbar({
            message: `${role[0].toUpperCase() + role.substr(1)} ${first_name} ${last_name} added.`,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));

        yield put(actions.getUsers(query));
    } catch (error) {
        console.error('addUser', error);

        yield put(enqueueSnackbar({
            message: getStringFromError(error),
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}

function* deleteUser(action) {
    try {
        const { user, query } = action.payload;
        const {
            first_name, last_name, id, role,
        } = user;

        yield call(api.requestDeleteUser, id);

        yield put(enqueueSnackbar({
            message: `${role[0].toUpperCase() + role.substr(1)} ${first_name} ${last_name} deleted.`,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));

        yield put(actions.getUsers(query));
    } catch (error) {
        console.error('deleteUser', error);

        yield put(enqueueSnackbar({
            message: getStringFromError(error),
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}

function* updateUser(action) {
    try {
        const { user, values } = action.payload;
        const {
            first_name, last_name, id, role,
        } = user;

        const { data } = yield call(api.requestUpdateUser, { values, user_id: id });

        yield put(enqueueSnackbar({
            message: `${role[0].toUpperCase() + role.substr(1)} ${first_name} ${last_name} updated.`,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));

        yield put(actions.setUser(data.data));
    } catch (error) {
        console.error('updateUser', error);

        yield put(enqueueSnackbar({
            message: getStringFromError(error),
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}

function* getUser(action) {
    try {
        const { data } = yield call(api.requestGetUser, action.payload);

        yield put(actions.setUser(data.data));
    } catch (error) {
        console.error('getUser', error);
    }
}


function* authSaga() {
    yield all([
        yield takeEvery(types.GET_USERS_REQUEST, getUsers),
        yield takeEvery(types.GET_USERS_FOR_MANAGER_REQUEST, getUsersForManager),
        yield takeEvery(types.GET_MANAGERS_FOR_USER_CREATION_REQUEST, getManagersForUserCreation),
        yield takeLatest(types.ADD_USER_REQUEST, addUser),
        yield takeLatest(types.DELETE_USER_REQUEST, deleteUser),
        yield takeLatest(types.UPDATE_USER_REQUEST, updateUser),
        yield takeLatest(types.GET_USER_REQUEST, getUser),
    ]);
}

export default authSaga;
