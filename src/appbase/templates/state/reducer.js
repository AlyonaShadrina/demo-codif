import * as types from './types';


const initialState = {
    templates: {
        templates: [],
        isLoading: {
            addTemplateLoading: false,
        },
    },
    variables: {},
    documents: {
        data: {},
        loading: false,
        upload: {
            isAnalyzing: false,
            document: {},
        },
    },
};

export default function templatesReducer(state = initialState, { type, payload }) {
    switch (type) {
    case types.ADD_TEMPLATE_REQUEST:
        return {
            ...state,
            templates: {
                ...state.templates,
                isLoading: {
                    ...state.templates.isLoading,
                    addTemplateLoading: true,
                },
            },
        };
    case types.GET_TEMPLATES_LIST_SUCCESS:
        return {
            ...state,
            templates: {
                ...state.templates,
                templates: payload,
            },
        };
    case types.GET_TEMPLATE_SUCCESS:
        return {
            ...state,
            templates: {
                ...state.templates,
                templates: {
                    ...state.templates.templates,
                    [payload.id]: {
                        ...state.templates.templates[payload.id],
                        ...payload,
                    },
                },
                isLoading: {
                    ...state.templates.isLoading,
                    addTemplateLoading: false,
                },
            },
        };
    case types.GET_VARIABLES_SUCCESS:
        return {
            ...state,
            variables: {
                ...state.variables,
                ...payload,
            },
        };
    case types.SET_VARIABLES_TO_TEMPLATE:
        return {
            ...state,
            templates: {
                ...state.templates,
                templates: {
                    ...state.templates.templates,
                    [payload.templateId]: {
                        ...state.templates.templates[payload.templateId],
                        variables: payload.variablesId,
                    },
                },

            },
        };
    case types.GET_DOCUMENTS_LIST_REQUEST:
        return {
            ...state,
            documents: {
                ...state.documents,
                loading: true,
            },
        };
    case types.GET_DOCUMENTS_LIST_SUCCESS:
        return {
            ...state,
            documents: {
                ...state.documents,
                data: payload,
                loading: false,
            },
        };
    case types.ANALYZE_SET_STARTED:
        return {
            ...state,
            documents: {
                ...state.documents,
                upload: {
                    ...initialState.documents.upload,
                    isAnalyzing: true,
                },
            },
        };
    case types.ANALYZE_SET_STOPPED:
        return {
            ...state,
            documents: {
                ...state.documents,
                upload: {
                    ...initialState.documents.upload,
                    isAnalyzing: false,
                },
            },
        };
    case types.ANALYZE_SET_RESULT:
        return {
            ...state,
            documents: {
                ...state.documents,
                data: {
                    ...state.documents.data,
                    [payload.id]: payload,
                },
                upload: {
                    ...initialState.documents.upload,
                    isAnalyzing: !payload.analysis,
                    document: payload,
                },
            },
        };
    default:
        return state;
    }
}
