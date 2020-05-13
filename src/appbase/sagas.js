import { all } from 'redux-saga/effects';

import { authSaga } from './auth/state';
import { profileSaga } from './profile/state';
import { botsSaga } from './bots/state';
import { templatesSaga } from './templates/state';
import { dictSaga } from './dictionary/state';
import { userSaga } from './users/state';


export default function* rootSaga() {
    yield all([
        authSaga(),
        profileSaga(),
        botsSaga(),
        templatesSaga(),
        dictSaga(),
        userSaga(),
    ]);
}
