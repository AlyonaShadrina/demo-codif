import * as types from './types';


const mainDict = 'bots';

const initialState = {
    loading: false,
    [mainDict]: {
        data: {},
        meta: {},
    },
    userStatuses: {},
    idle: [],
    completed: [],
    in_progress: [],
    scheduled: [],
    failed: [],
    pending: [],
    vdi: {},
    usersForBotCreation: {},
    usersForBotUpdate: {},
};

export default function botReducer(state = initialState, { type, payload }) {
    switch (type) {
    case types.GET_USERS_FOR_BOT_CREATION_SUCCESS:
        return {
            ...state,
            usersForBotCreation: payload,
        };
    case types.GET_USERS_FOR_BOT_UPDATE_SUCCESS:
        return {
            ...state,
            usersForBotUpdate: payload,
        };
    case types.SET_USER_BOT_STATUSES:
        return {
            ...state,
            userStatuses: payload,
        };
    case types.REQUEST_GET_BOTS_WITH_STATUS:
        return {
            ...state,
            loading: true,
        };
    case types.REQUEST_GET_ADMIN_BOT_LIST:
        return {
            ...state,
            loading: true,
        };
    case types.SET_ADMIN_BOT_LIST:
        return {
            ...state,
            [mainDict]: payload,
            loading: false,
        };
    case types.SET_BOTS_WITH_STATUS:
        return {
            ...state,
            [mainDict]: {
                ...state[mainDict],
                ...payload.bots,
            },
            [payload.status]: payload.botsId,
            loading: false,
        };
    case types.REQUEST_GET_BOT:
        return {
            ...state,
            loading: true,
        };
    case types.GET_ALL_VDI_SUCCESS:
        return {
            ...state,
            vdi: payload,
        };
    case types.UPDATE_VDI_SUCCESS:
        return {
            ...state,
            vdi: {
                ...state.vdi,
                [payload.id]: payload,
            },
        };
    case types.SET_CURRENT_BOT:
        return {
            ...state,
            [mainDict]: {
                ...state[mainDict],
                data: {
                    ...state[mainDict].data,
                    [payload.id]: payload,
                },
            },
            loading: false,
        };
    case types.SET_VARIABLES:
        return {
            ...state,
            [mainDict]: {
                ...state[mainDict],
                data: {
                    ...state[mainDict].data,
                    [payload.bot_id]: {
                        ...state[mainDict].data[payload.bot_id],
                        variables: payload.data,
                    },
                },
            },
        };
    case types.SET_UPLOADED_FILES:
        return {
            ...state,
            [mainDict]: {
                ...state[mainDict],
                data: {
                    ...state[mainDict].data,
                    [payload.bot_id]: {
                        ...state[mainDict].data[payload.bot_id],
                        files: payload.data,
                    },
                },

            },
        };
    case types.SET_BOT_STATISTICS:
        return {
            ...state,
            [mainDict]: {
                ...state[mainDict],
                data: {
                    ...state[mainDict].data,
                    [payload.bot_id]: {
                        ...state[mainDict].data[payload.bot_id],
                        statistics: payload.data,
                    },
                },
            },
        };
    default:
        return state;
    }
}
