import { all, takeEvery, takeLatest } from 'redux-saga/effects';

import * as types from '../types';
import * as botSaga from './bot';
import * as filesSaga from './files';
import * as runSaga from './run';
import * as usersSaga from './users';
import * as variablesSaga from './variables';
import * as vdiSaga from './vdi';


function* botsSaga() {
    yield all([
        // bots
        yield takeLatest(types.REQUEST_GET_ADMIN_BOT_LIST, botSaga.getAdminBotList),
        yield takeLatest(types.GET_USERS_FOR_BOT_CREATION_REQUEST, usersSaga.getUsersForBotCreation),
        yield takeLatest(types.GET_USERS_FOR_BOT_UPDATE_REQUEST, usersSaga.getUsersForBotUpdate),
        yield takeLatest(types.REQUEST_GET_USER_BOT_STATUSES, botSaga.getUserBotStatuses),
        yield takeLatest(types.REQUEST_GET_BOTS_WITH_STATUS, botSaga.getBotsWithStatus),
        yield takeLatest(types.REQUEST_GET_BOT, botSaga.getBot),
        yield takeLatest(types.REQUEST_UPDATE_BOT, botSaga.updateBot),
        yield takeLatest(types.REQUEST_UPDATE_BOT_TIME, botSaga.updateBotTime),
        yield takeLatest(types.REQUEST_UPDATE_BOT_USERS, botSaga.updateBotUsers),
        yield takeLatest(types.REQUEST_CREATE_BOT, botSaga.createBot),
        yield takeLatest(types.REQUEST_DELETE_BOT, botSaga.deleteBot),
        yield takeLatest(types.REQUEST_GET_BOT_STATISTICS, botSaga.requestBotStatistics),
        // run
        yield takeLatest(types.REQUEST_RUN_BOT, runSaga.runBot),
        yield takeLatest(types.REQUEST_STOP_BOT, runSaga.stopBot),
        // files
        yield takeLatest(types.REQUEST_GET_FILES, filesSaga.getFiles),
        yield takeLatest(types.REQUEST_UPLOAD_FILE, filesSaga.requestUploadFile),
        yield takeEvery(types.REQUEST_DELETE_FILE, filesSaga.requestDeleteFile),
        // variables
        yield takeLatest(types.REQUEST_GET_VARIABLES, variablesSaga.getVariables),
        yield takeLatest(types.REQUEST_CREATE_VARIABLE, variablesSaga.postVariable),
        yield takeLatest(types.REQUEST_DELETE_VARIABLE, variablesSaga.deleteVariable),
        yield takeLatest(types.REQUEST_UPDATE_VARIABLE, variablesSaga.updateVariable),
        // vdi
        yield takeLatest(types.GET_ALL_VDI_REQUEST, vdiSaga.getAllVdi),
        yield takeLatest(types.UPDATE_VDI_REQUEST, vdiSaga.updateVdi),
        yield takeLatest(types.CREATE_VDI_REQUEST, vdiSaga.createVdi),
        yield takeLatest(types.DELETE_VDI_REQUEST, vdiSaga.deleteVdi),
        yield takeLatest(types.UPDATE_BOT_VDI_REQUEST, vdiSaga.updateBotVdi),
    ]);
}

export default botsSaga;
