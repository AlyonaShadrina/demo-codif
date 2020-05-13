import {
    get, post, del, patch,
} from '../../../api/_ml';
import { ML_URIS } from '../../../config';


export const requestGetTemplates = () => get(ML_URIS.template.template);

export const requestGetTemplate = (id) => get(`${ML_URIS.template.template}/${id}`);

export const requestPostTemplate = (data) => post(ML_URIS.template.template, data);

export const requestUpdateTemplate = ({ id, data }) => patch(`${ML_URIS.template.template}/${id}`, data);

export const requestDeleteTemplate = (id) => del(`${ML_URIS.template.template}/${id}`);

export const requestUploadFile = (data) => post(ML_URIS.document.document, data);

export const requestStartAnalyze = (id) => patch(`${ML_URIS.document.document}/${id}${ML_URIS.document.analyze}`);

export const requestGetDocument = (id) => get(`${ML_URIS.document.document}/${id}`);

export const requestGetDocumentsList = ({ cancel }) => get(ML_URIS.document.document, cancel);

export const requestTrainDocument = ({ document_id, template_id }) => patch(`${ML_URIS.document.document}/${document_id}${ML_URIS.document.train}`, { template_id });

export const requestGetRecognizeDocument = ({ document_id, template_id }) => get(`${ML_URIS.document.document}/${document_id}${ML_URIS.document.template}${template_id}${ML_URIS.document.recognize}`);

export const requestGetVariables = (id) => get(`${ML_URIS.template.template}/${id}${ML_URIS.document.variables}`);

export const requestAddVariable = (values) => post(ML_URIS.document.variable, values);

export const requestEditVariable = ({ values, varId }) => patch(`${ML_URIS.document.variable}/${varId}`, values);

export const requestDeleteVariable = (id) => del(`${ML_URIS.document.variable}/${id}`);
