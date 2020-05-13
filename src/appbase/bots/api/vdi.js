import {
    del, get, patch, post,
} from '../../../api/_base';
import { API_URIS } from '../../../config';


export const requestGetAllVdi = () => (
    get(API_URIS.vdi.vdi)
);
export const requestUpdateVdi = ({ vdi_id, values }) => (
    patch(`${API_URIS.vdi.vdi}/${vdi_id}`, values)
);
export const requestCreateVdi = (values) => (
    post(API_URIS.vdi.vdi, values)
);
export const requestDeleteVdi = (id) => (
    del(`${API_URIS.vdi.vdi}/${id}`)
);
