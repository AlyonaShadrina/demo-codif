import {
    post, del, get, patch,
} from '../../../api/_base';
import { API_URIS } from '../../../config';


export const requestGetVariables = ({ user_id, bot_id }) => (
    get(`${API_URIS.bots.users + user_id}/${API_URIS.bots.bots}${bot_id}${API_URIS.bots.variables}`)
);
export const requestPostVariable = ({ user_id, bot_id, data }) => (
    post(`${API_URIS.bots.users + user_id}/${API_URIS.bots.bots}${bot_id}${API_URIS.bots.variables}`, data)
);
export const requestPatchVariable = ({
    user_id, bot_id, variable_id, data,
}) => (
    patch(`${API_URIS.bots.users + user_id}/${API_URIS.bots.bots}${bot_id}${API_URIS.bots.variables}/${variable_id}`, data)
);
export const requestDeleteVariable = ({ user_id, bot_id, variable_id }) => (
    del(`${API_URIS.bots.users + user_id}/${API_URIS.bots.bots}${bot_id}${API_URIS.bots.variables}/${variable_id}`)
);
