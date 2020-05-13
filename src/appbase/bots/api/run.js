import { del, post } from '../../../api/_base';
import { API_URIS } from '../../../config';


export const requestRunBot = ({ user_id, bot_id }) => (
    post(`${API_URIS.bots.users + user_id}/${API_URIS.bots.bots}${bot_id}${API_URIS.bots.runner}`)
);
export const requestStopBot = ({ user_id, bot_id }) => (
    del(`${API_URIS.bots.users + user_id}/${API_URIS.bots.bots}${bot_id}${API_URIS.bots.runner}`)
);
