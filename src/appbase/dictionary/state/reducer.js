import * as types from './types';


const initialState = {
    variables_types: null,
    variables_types_ml: null,
};

export default function dictReducer(state = initialState, { type, payload }) {
    switch (type) {


    case types.DICT_VARIABLE_TYPES_SUCCESS:
        return {
            ...state,
            variables_types: payload,
        };
    case types.DICT_VARIABLE_TYPES_SUCCESS_ML:
        return {
            ...state,
            variables_types_ml: payload,
        };
    default:
        return state;
    }
}
