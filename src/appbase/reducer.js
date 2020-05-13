import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './auth/state';
import profile from './profile/state';
import bots from './bots/state';
import templates from './templates/state';
import users from './users/state';
import uiReducer from './_layout/state';
import dict from './dictionary/state';

const rootReducer = combineReducers({
    auth,
    profile,
    bots,
    dict,
    templates,
    users,
    ui: uiReducer,
    form,
});

export default rootReducer;
