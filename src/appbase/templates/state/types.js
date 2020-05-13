import { REDUX_IDENTIFIER } from '../../../config';

export const GET_TEMPLATES_LIST_REQUEST = `${REDUX_IDENTIFIER}GET_TEMPLATES_LIST_REQUEST`;
export const GET_TEMPLATES_LIST_SUCCESS = `${REDUX_IDENTIFIER}GET_TEMPLATES_LIST_SUCCESS`;

export const GET_DOCUMENTS_LIST_REQUEST = `${REDUX_IDENTIFIER}GET_DOCUMENTS_LIST_REQUEST`;
export const GET_DOCUMENTS_LIST_SUCCESS = `${REDUX_IDENTIFIER}GET_DOCUMENTS_LIST_SUCCESS`;
export const GET_DOCUMENTS_LIST_CANCEL = `${REDUX_IDENTIFIER}GET_DOCUMENTS_LIST_CANCEL`;

export const GET_TEMPLATE_REQUEST = `${REDUX_IDENTIFIER}GET_TEMPLATE_REQUEST`;
export const GET_TEMPLATE_SUCCESS = `${REDUX_IDENTIFIER}GET_TEMPLATE_SUCCESS`;
export const ADD_TEMPLATE_REQUEST = `${REDUX_IDENTIFIER}ADD_TEMPLATE_REQUEST`;
export const UPDATE_TEMPLATE_REQUEST = `${REDUX_IDENTIFIER}UPDATE_TEMPLATE_REQUEST`;
export const DELETE_TEMPLATE_REQUEST = `${REDUX_IDENTIFIER}DELETE_TEMPLATE_REQUEST`;

export const UPLOAD_FILE_REQUEST = `${REDUX_IDENTIFIER}UPLOAD_FILE_REQUEST_ML`;

export const ANALYZE_START_REQUEST = `${REDUX_IDENTIFIER}ANALYZE_START_REQUEST`;
export const ANALYZE_SET_STARTED = `${REDUX_IDENTIFIER}ANALYZE_SET_STARTED`;
export const ANALYZE_SET_STOPPED = `${REDUX_IDENTIFIER}ANALYZE_SET_STOPPED`;
export const ANALYZE_SET_RESULT = `${REDUX_IDENTIFIER}ANALYZE_SET_RESULT`;

export const GET_VARIABLES_REQUEST = `${REDUX_IDENTIFIER}GET_VARIABLES_REQUEST_ML`;
export const GET_VARIABLES_SUCCESS = `${REDUX_IDENTIFIER}GET_VARIABLES_SUCCESS`;
export const SET_VARIABLES_TO_TEMPLATE = `${REDUX_IDENTIFIER}SET_VARIABLES_TO_TEMPLATE`;

export const ADD_VARIABLE_REQUEST = `${REDUX_IDENTIFIER}ADD_VARIABLE_REQUEST`;
export const EDIT_VARIABLE_REQUEST = `${REDUX_IDENTIFIER}EDIT_VARIABLE_REQUEST`;
export const DELETE_VARIABLE_REQUEST = `${REDUX_IDENTIFIER}DELETE_VARIABLE_REQUEST_ML`;

export const GET_DOCUMENT_REQUEST = `${REDUX_IDENTIFIER}GET_DOCUMENT_REQUEST`;
export const TRAIN_DOCUMENT_REQUEST = `${REDUX_IDENTIFIER}TRAIN_DOCUMENT_REQUEST`;
export const GET_RECOGNIZE_DOCUMENT_REQUEST = `${REDUX_IDENTIFIER}GET_RECOGNIZE_DOCUMENT_REQUEST`;
