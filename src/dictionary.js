const MLConfirms = {
    MLTemplateCreated: 'Template created.',
    MLTemplateUpdated: 'Template updated.',
    MLTemplateDeleted: 'Template deleted.',
    MlVariableCreated: 'variable created.',
    MlVariableUpdated: 'Variable updated.',
    MlVariableDeleted: 'Variable deleted.',
    MlDocumentTrained: 'Document sent for train.',
    MlDocumentTrainRequest: 'Requesting sending for train...',
    MlDocumentGetRecognize: 'Requesting recognize result...',
};
const botConfirms = {
    botUpdated: 'BOT updated.',
    botUsersUpdated: 'BOT users updated.',
    botScheduled: 'BOT start time updated.',
    botVdiUpdated: 'BOT VDI updated.',
    botRunRequest: 'Requesting BOT runner...',
    botRunStart: 'BOT runner started.',
    botRunStop: 'BOT runner stopped.',
};
const variableConfirms = {
    variableCreated: 'variable created.',
    variableUpdated: 'variable updated',
    variableDeleted: 'Variable deleted.',
};
const fileConfirms = {
    fileUploaded: 'Files uploaded.',
    fileDeleted: 'File deleted.',
};
const vdiConfirms = {
    vdiUpdated: 'VDI updated.',
    vdiCreated: 'VDI created.',
    vdiDeleted: 'VDI deleted.',
};

export const notifications = {
    errors: {
        default: 'Something went wrong.',
        MlDocumentTrainErrorLength: 'All variable fields must be filled.',
        addBot: 'Check if bot has name and at least one assigned user.',
        accessDenied: 'Access denied.',
    },
    confirms: {
        done: 'Done!',
        profileUpdated: 'Profile updated.',
        ...botConfirms,
        ...variableConfirms,
        ...fileConfirms,
        ...vdiConfirms,
        ...MLConfirms,
    },
};

export const errorMessages = {
    400: 'Your request is invalid. Try to clean cookie and login again.',
    401: 'Your API key is wrong. Try to clean cookie and login again.',
    403: 'You have no access to this information.',
    404: 'Page could not be found.',
    405: 'You tried to access a kitten with an invalid method.',
    406: 'You requested a format that is not acceptable (maybe, it`s not a .json?).',
    410: 'This info removed from our servers.',
    418: "I'm a teapot.",
    429: 'Too Many Requests. Try to clean cookie and login again.',
    500: 'We had a problem with our server. Try again later.',
    503: "We're temporarily offline for maintenance. Please try again later.",
};

export const paths = {
    admin: '/admin',
    manager: '/manager',
    login: '/login',
    templates: '/templates',
    templatesUpload: '/upload',
    workflows: '/workflows',
    bots: '/bots',
    botsVdi: '/vdi',
    profile: '/profile',
    error: '/error',
    users: '/users',
    managers: '/managers',
    logs: '/logs',
    trainAction: '/train',
    recognizeAction: '/recognize',
    create: '/create',
};

export const placeholders = {
    bot: {
        name: 'Enter bot name',
        description: 'Enter bot description',
        start_datetime: 'Start time',
        user_ids: 'user ids',
        vdi: 'Select run environment',
        aa_base_file_path: 'Enter aa base file path',
        aa_bot_name: 'Enter aa bot name',
        variable: {
            label: (type) => `Enter ${type} label`,
            value: (type) => `Enter ${type} value`,
        },
    },
};

export const buttons = {
    bot: {
        addNewVariable: 'Add New',
        addNewBot: 'Add bot',
    },
};

export const navigationByRoles = {
    manager: [
        {
            link: (id) => `${paths.users}/${id}${paths.bots}`,
            text: 'Dashboard',
        },
        {
            link: paths.workflows,
            text: 'Doc Workflows',
        },
    ],
    admin: [
        {
            link: (id) => `${paths.users}/${id}${paths.bots}`,
            text: 'Dashboard',
        },
        {
            link: paths.workflows,
            text: 'Doc Workflows',
        },
    ],
    user: [
        {
            link: (id) => `${paths.users}/${id}${paths.bots}`,
            text: 'Dashboard',
        },
        {
            link: paths.workflows,
            text: 'Doc Workflows',
        },
    ],
};

export const dropdownMenuByRoles = {
    manager: [
        {
            link: '/',
            text: 'Dashboard',
        },
        {
            link: paths.workflows,
            text: 'Doc Workflows',
        },
        {
            link: '/add',
            text: 'Add / Edit',
        },
        {
            link: paths.admin + paths.logs,
            text: 'Logs',
        },
        {
            link: paths.profile,
            text: 'Profile',
        },
    ],
    admin: [
        {
            link: '/',
            text: 'Dashboard',
        },
        {
            link: paths.workflows,
            text: 'Doc Workflows',
        },
        {
            link: '/add',
            text: 'Add / Edit',
        },
        {
            link: paths.admin + paths.logs,
            text: 'Logs',
        },
        {
            link: paths.profile,
            text: 'Profile',
        },
    ],
    user: [
        {
            link: '/',
            text: 'Dashboard',
        },
        {
            link: paths.workflows,
            text: 'Doc Workflows',
        },
        {
            link: '/add',
            text: 'Add / Edit',
        },
        {
            link: paths.profile,
            text: 'Profile',
        },
    ],
};

export const addEditMenuItems = {
    user: [
        {
            text: 'Bots',
            link: '/',
        },
        {
            text: 'Data Extraction',
            link: '/templates',
        },
    ],
    manager: [
        {
            text: 'Data Extraction',
            link: '/templates',
        },
        {
            link: paths.admin + paths.users,
            text: 'Users',
        },
        {
            link: paths.admin + paths.bots,
            text: 'Bots',
        },
    ],
    admin: [
        {
            text: 'Data Extraction',
            link: '/templates',
        },
        {
            link: paths.admin + paths.users,
            text: 'Users',
        },
        {
            link: paths.admin + paths.managers,
            text: 'Manager',
        },
        {
            link: paths.admin + paths.bots,
            text: 'Bots',
        },
    ],
};

export const DEFAULT_PAGE_TITLE = 'codif';
export const DEFAULT_HEAD_DESCRIPTION = 'Manage, edit, analise your documents automatically.';
