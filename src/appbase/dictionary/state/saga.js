import {
    all, call, put, takeLatest,
} from 'redux-saga/effects';

import * as api from '../api';
import * as actions from './actions';
import * as types from './types';


function* getVariableTypesDictML() {
    try {
        const { data } = yield call(api.requestVariableTypesDictML);

        yield put(actions.setVariableTypesDictML(data));
    } catch (error) {
        console.error('getVariableTypesDictML', error);
    }
}
function* getVariableTypesDict() {
    try {
        const { data } = yield call(api.requestVariableTypesDict);

        yield put(actions.setVariableTypesDict(data.data));
    } catch (error) {
        console.error('setVariableTypesDict', error);
    }
}

function* dictSaga() {
    yield all([
        yield takeLatest(types.DICT_VARIABLE_TYPES_REQUEST_ML, getVariableTypesDictML),
        yield takeLatest(types.DICT_VARIABLE_TYPES_REQUEST, getVariableTypesDict),
    ]);
}

export default dictSaga;
