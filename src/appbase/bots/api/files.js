import { del, post, get } from '../../../api/_base';
import { API_URIS } from '../../../config';


export const requestGetFiles = ({ user_id, bot_id }) => (
    get(`${API_URIS.bots.users + user_id}/${API_URIS.bots.bots}${bot_id}/${API_URIS.bots.file}`)
);
export const requestUploadFile = ({ user_id, bot_id, file }) => (
    post(`${API_URIS.bots.users + user_id}/${API_URIS.bots.bots}${bot_id}/${API_URIS.bots.file}`, file)
);
export const requestDeleteFile = ({ user_id, bot_id, file_id }) => (
    del(`${API_URIS.bots.users + user_id}/${API_URIS.bots.bots}${bot_id}/${API_URIS.bots.file}/${file_id}`)
);
