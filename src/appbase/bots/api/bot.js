import {
    del, get, patch, post,
} from '../../../api/_base';
import { API_URIS } from '../../../config';
import { objToQueryString } from '../../../utils/query';


export const requestGetUsersForBotCreation = (queryObj) => {
    const query = `?${objToQueryString(queryObj)}`;
    return (get(API_URIS.admin.users + query));
};

export const requestGetAdminBotList = (queryObj) => {
    const query = `?include=users&${objToQueryString(queryObj)}`;
    return (get(API_URIS.bots.bots + query));
};

export const requestGetUserBotStatuses = (id) => (get(`${API_URIS.bots.users + id}/${API_URIS.bots.bots}${API_URIS.bots.statuses}`));

export const requestGetBotsWithStatus = ({ id, status }) => {
    const query = `?filter[status]=${status}&include=status,active_run`;
    return (get(`${API_URIS.bots.users + id}/${API_URIS.bots.bots}${query}`));
};

export const requestGetBot = ({ user_id, bot_id }) => {
    const query = '?include=user,users,files,status,variables,active_run,vdi,parentBot,childrenBots';
    return (get(`${API_URIS.bots.users + user_id}/${API_URIS.bots.bots}${bot_id}${query}`));
};

export const requestBotStatistics = ({ user_id, bot_id, data }) => {
    const query = `?on_last_days=${data}`;
    return (get(`${API_URIS.bots.users + user_id}/${API_URIS.bots.bots}${bot_id}${API_URIS.bots.statistics}${query}`));
};

// create, update, delete
export const requestUpdateBot = ({ user_id, bot_id, data }) => (
    patch(`${API_URIS.bots.users + user_id}/${API_URIS.bots.bots}${bot_id}`, data)
);
export const requestUpdateBotUsers = ({ bot_id, data }) => (
    patch(`${API_URIS.admin.bots}/${bot_id}${API_URIS.bots.assign_user}`, data)
);
export const requestScheduleBot = ({ user_id, bot_id, data }) => (
    patch(`${API_URIS.bots.users + user_id}/${API_URIS.bots.bots}${bot_id}${API_URIS.bots.schedule}`, data)
);
export const requestUpdateBotVdi = ({ user_id, bot_id, data }) => (
    patch(`${API_URIS.bots.users + user_id}/${API_URIS.bots.bots}${bot_id}${API_URIS.bots.vdi}`, data)
);
export const requestCreateBot = (values) => (
    post(API_URIS.bots.bots, values)
);
export const requestDeleteBot = ({ user_id, bot_id }) => (
    del(`${API_URIS.bots.users + user_id}/${API_URIS.bots.bots}${bot_id}`)
);
