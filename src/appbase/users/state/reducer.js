import * as types from './types';

const mainDict = 'allUserList';

const initialState = {
    [mainDict]: {},
    user: [],
    manager: {
        idList: [],
        meta: {},
        idListForCreation: []
    },
    admin: [],
    loading: false,
};

export default function authReducer(state = initialState, { type, payload }) {
    switch (type) {
    case types.GET_USERS_SUCCESS:
        return {
            ...state,
            [mainDict]: {
                ...state[mainDict],
                ...payload.users,
            },
            [payload.role]: payload.usersId,
            loading: false,
        };

    case types.GET_USERS_FOR_MANAGER_SUCCESS:
        return {
            ...state,
            [mainDict]: {
                ...state[mainDict],
                ...payload.users,
                [payload.managerId]: {
                    ...state[mainDict][payload.managerId],
                    user_ids: payload.usersId,
                    ...payload.users,
                },
            },
        };
        case types.GET_MANAGERS_FOR_USER_CREATION_SUCCESS:
        return {
            ...state,
            [mainDict]: {
                ...state[mainDict],
                ...payload.managers,
            },
            manager: {
                ...state.manager,
                idListForCreation: payload.ids,
            }
        };

    case types.UPDATE_USER_SUCCESS:
        return {
            ...state,
            [mainDict]: {
                ...state[mainDict],
                [payload.id]: payload,
            },
        };

    default:
        return state;
    }
}
