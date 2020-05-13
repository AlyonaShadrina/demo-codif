import * as types from './types';


const initialState = {
    id: null,
    first_name: null,
    last_name: null,
    avatar: null,
    email: null,
    error: null,
};

export default function profileReducer(state = initialState, { type, payload }) {
    switch (type) {

    case types.GET_PROFILE_SUCCESS:
        return {
            ...state,
            ...payload,
        };
    default:
        return state;
    }
}
