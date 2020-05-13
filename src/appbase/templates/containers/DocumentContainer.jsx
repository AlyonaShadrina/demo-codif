import { Grid, makeStyles } from '@material-ui/core';
import cloneDeep from 'lodash/fp/cloneDeep';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change } from 'redux-form';
import { withRouter } from 'react-router';

import { reduxFormNames } from '../../../config';
import { notifications } from '../../../dictionary';
import Loading from '../../_common/Loading';
import { enqueueSnackbar } from '../../_layout/state/actions';
import DocumentInfo from '../components/DocumentInfo';
import PdfView from '../components/PdfView';
import * as actions from '../state/actions';
import * as selectors from '../state/selectors';
import { convertCoords, formInintialTrainedValues } from '../helpers';
import PdfTrainForm from '../components/PdfTrainForm';


const useStyles = makeStyles((theme) => ({
    container: {
        height: 'calc(100vh - (80px + 50px))',
    },
    pdfView: {
        width: '75vw',
        position: 'relative',
    },
    pdfEdit: {
        position: 'relative',
        overflowY: 'auto',
        height: '100%',
        backgroundColor: theme.palette.common.white,
    },
    pdfEditInner: {
        maxHeight: 'calc(100vh - 80px - 50px)',
        overflowY: 'auto',
        backgroundColor: '#fff',
    },
}));

const DocumentContainer = ({ match }) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const { templateId, action, documentId } = match.params;

    const template = useSelector(selectors.templateList)[templateId];
    const templateVariablesId = template ? template.variables : null;
    const variables = useSelector(selectors.variableList);
    const document = useSelector(selectors.documents).data[documentId] || {};

    const isRecognize = action === 'recognize';

    const ref = useRef(null);

    useEffect(() => {
        dispatch(actions.requestTemplate(templateId));
        dispatch(actions.requestVariables(templateId));
        if (isRecognize) {
            dispatch(actions.requestGetRecognize({
                template_id: templateId,
                document_id: documentId,
            }));
        } else {
            dispatch(actions.requestGetDocument(documentId));
        }
    }, []);


    const [currentVar, setCurrentVar] = useState(null);
    const focusVariable = (id) => {
        setCurrentVar(id);
    };

    useEffect(() => {
        if (isRecognize) {
            const { initialHighlights } = formInintialTrainedValues(document, templateVariablesId);
            setHighlights(initialHighlights);
        }
    }, [document.trained, templateVariablesId]);

    const { initialFields, initialHighlights } = formInintialTrainedValues(document, templateVariablesId);


    const [highlights, setHighlights] = useState(isRecognize ? initialHighlights : {});

    const addVarRectContent = (varObj, highlightObj) => {
        if (highlightObj) {
            setHighlights((oldObj) => ({
                ...oldObj,
                ...highlightObj,
            }));
        }


        Object.keys(varObj).map((keyId) => {
            Object.keys(varObj[keyId]).map((field) => {
                dispatch(change(reduxFormNames.trainFields, `${keyId}.${field}`, varObj[keyId][field]));
            });
        });
    };

    const sendTrain = (values) => {
        if (templateVariablesId.length !== Object.keys(values).length) {
            dispatch(enqueueSnackbar({
                message: notifications.errors.MlDocumentTrainErrorLength,
                options: {
                    key: new Date().getTime() + Math.random(),
                    variant: 'error',
                },
            }));
        } else {
            const variablesArray = [];

            templateVariablesId.map((id) => {
                const clonedVar = cloneDeep(variables[id]);
                const clonedValues = cloneDeep(values[id]);

                const varToEdit = {
                    ...clonedVar,
                    ...clonedValues,
                };

                // we have to change render coordinates to (server) document coordinates
                // but is we are on recognize page and field wasn't touched, we don't change values
                if (!(initialFields[id] && initialFields[id].region.x === varToEdit.region.x)) {
                    convertCoords({ document, varToEdit, ref });
                }

                variablesArray.push(varToEdit);
            });
            const trainData = {
                document_id: documentId,
                template_id: parseInt(templateId),
                variables: variablesArray,
            };
            dispatch(actions.requestTrainDocument(trainData));
            dispatch(enqueueSnackbar({
                message: notifications.confirms.MlDocumentTrainRequest,
                options: {
                    key: new Date().getTime() + Math.random(),
                    variant: 'info',
                },
            }));
        }
    };

    if (Object.keys(document).length === 0
        || !template
        || Object.keys(template).length === 0
        || !variables
        || !templateVariablesId
    ) {
        return <Loading />;
    }

    return (
        <Grid container className={classes.container}>
            <Grid
                item
                xs={8}
                className={classes.pdfView}
                ref={ref}
            >
                <PdfView
                    document={document}
                    highlights={highlights}
                    variableId={currentVar}
                    variables={variables}
                    addVarRectContent={addVarRectContent}
                />
            </Grid>
            <Grid item xs={4} className={classes.pdfEdit}>
                <div className={classes.pdfEditInner}>
                    <Grid container>
                        <DocumentInfo
                            document={document}
                            template={template}
                            isRecognize={isRecognize}
                        />
                        <PdfTrainForm
                            variables={variables}
                            templateVariablesId={templateVariablesId}
                            initialValues={isRecognize ? initialFields : {}}
                            focusVariable={focusVariable}
                            train={sendTrain}
                        />
                    </Grid>
                </div>
            </Grid>
        </Grid>
    );
};

export default withRouter(DocumentContainer);
