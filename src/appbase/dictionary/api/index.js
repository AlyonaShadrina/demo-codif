import { get } from '../../../api/_base';
import { get as getML } from '../../../api/_ml';
import { API_URIS, ML_URIS } from '../../../config';


export const requestVariableTypesDictML = () => getML(ML_URIS.dictionaries.variables_types);
export const requestVariableTypesDict = () => get(API_URIS.dictionaries.variables_types);
