export const PROJECT_NAME = 'codif';

export const REDUX_IDENTIFIER = `@@${PROJECT_NAME}/`;

export const BASE_API_URI = process.env.REACT_APP_BASE_API_URI;

const auth = {
    login: 'auth/login',
    logout: 'auth/logout',
    forgot: 'auth/forgot',
    reset: 'auth/reset',
};
const contacts = {
    contacts: 'contacts',

};
const admin = {
    contacts: 'admin/contacts',
    users: 'admin/users',
    bots: 'admin/bots',
};
const profile = {
    profile: 'profile',
    avatar: 'profile/avatar',
    change_email: 'profile/change_email',
};
const bots = {
    users: 'users/',
    bots: 'bots/',
    file: 'files',
    runner: '/runner',
    statistics: '/statistics',
    variables: '/variables',
    statuses: 'statuses',
    schedule: '/schedule',
    vdi: '/vdi',
    assign_user: '/assign_user',
};
const vdi = {
    vdi: 'vdis',
};
const variable_types = {
    variable_types: '/variable_types',
};
const dictionaries = {
    bots_statuses: 'data/bots/statuses',
    bots_run_statuses: 'data/bots/runs/statuses',
    variables_types: 'data/variables/types',
};

export const API_URIS = {
    auth,
    contacts,
    admin,
    profile,
    bots,
    variable_types,
    dictionaries,
    vdi,
};

const template = {
    template: 'template'
};
const document = {
    document: 'document',
    analyze: '/analyze',
    variable: 'variable',
    variables: '/variables',
    train: '/train',
    recognize: '/recognize',
    template: '/template/'
};
const dictionariesML = {
    variables_types: 'variables/type',
};

export const ML_URIS = {
    template,
    document,
    dictionaries: dictionariesML,
};


export const userCreationDatetimeFormat = 'MMM D, YYYY HH:mm';
export const botStartDatetimeFormat = 'DD MMM HH:mm';
export const dateFormat = 'YYYY-MM-DD';
export const timeFormat = 'HH:mm:ss';
export const timeFormatToDisplay = 'HH:mm';

export const maxBotNameLength = 255;

export const reduxFormNames = {
    login: 'login',
    contact: 'contact',
    forgotPassword: 'forgot-password',
    resetPassword: 'reset-password',
    addVdi: 'add-vdi',
    addUser: 'add-user',
    addBot: 'add-bot',
    addTemplate: 'add-template',
    addVariable: 'add-variable',
    trainFields: 'add-fields',
    editFields: 'edit-fields',
    workflowsFilters: 'workflowsFilters',
    editBot: 'editBot',
    editBotAA: 'editBotAA',
    editBotVDI: 'editBotVDI',
    assignUsers: 'assignUsers',
    editUser: 'editUser',
};