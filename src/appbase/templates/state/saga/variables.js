import { reset } from 'redux-form';
import { call, put } from 'redux-saga/effects';
import keyBy from 'lodash/fp/keyBy';
import keys from 'lodash/fp/keys';

import { reduxFormNames } from '../../../../config';
import { notifications } from '../../../../dictionary';
import { enqueueSnackbar } from '../../../_layout/state/actions';
import * as api from '../../api';
import * as actions from '../actions';


export function* getVariables(action) {
    try {
        const { data } = yield call(api.requestGetVariables, action.payload);

        const variables = keyBy('id', data);
        const variablesId = keys(variables);

        yield put(actions.setVariablesList(variables));
        yield put(actions.setVariablesToTemplate({ variablesId, templateId: action.payload }));

        // console.log('getVariables', data);
    } catch (error) {
        console.error('getVariables', error);
    }
}

export function* addVariable(action) {
    try {
        const { template_id, name, type_id } = action.payload;

        yield call(api.requestAddVariable, {
            template_id: parseInt(template_id),
            name,
            type_id: parseInt(type_id),
            meta: {
                keywords: 'whatever',
            },
        });

        yield put(actions.requestVariables(action.payload.template_id));
        yield put(reset(reduxFormNames.addVariable));

        yield put(enqueueSnackbar({
            message: `"${name}" ${notifications.confirms.MlVariableCreated}`,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));
    } catch (error) {
        console.error('addVariable', error);
    }
}

export function* editVariable(action) {
    try {
        yield call(api.requestEditVariable, action.payload);

        yield put(enqueueSnackbar({
            message: notifications.confirms.MlVariableUpdated,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));
    } catch (error) {
        console.error('editVariable', error);

        yield put(enqueueSnackbar({
            message: notifications.errors.default,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}

export function* deleteVariable(action) {
    try {
        const { variableId, templateId } = action.payload;

        yield call(api.requestDeleteVariable, variableId);

        yield put(actions.requestVariables(templateId));

        yield put(enqueueSnackbar({
            message: notifications.confirms.MlVariableDeleted,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
            },
        }));
    } catch (error) {
        console.error('deleteVariable', error);

        yield put(enqueueSnackbar({
            message: notifications.errors.default,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
            },
        }));
    }
}
