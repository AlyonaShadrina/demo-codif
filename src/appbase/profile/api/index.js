import { post, get, patch } from '../../../api/_base';
import { API_URIS } from '../../../config';

export const requestGetProfile = () => (get(API_URIS.profile.profile));

export const requestChangeProfile = (data) => (patch(API_URIS.profile.profile, data));

export const requestChangeAvatar = (data) => (post(API_URIS.profile.avatar, data));

export const requestChangeEmail = (data, token) => (patch(`${API_URIS.profile.change_email}/${token}`, data));
