import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

import { confidenceColor } from '../../../../utils/confidenceColor';
import { paths } from '../../../../dictionary';
import RouterStyledLink from '../../../_common/RouterStyledLink';
import DocumentInfo from '../DocumentInfo';
import TrainForm from './TrainForm';


const useStyles = makeStyles(theme => ({
    container: {
        paddingBottom: 70,
    },
    cell: {
        borderBottom: `1px solid ${theme.palette.grey.A100}`,
        padding: '20px 10px',
    },
    title: {
        marginBottom: 5,
        marginTop: 5,
        textAlign: 'center',
    },
    type: {
        textAlign: 'center',
    },
}));

/**
 * Component shows side panel with document info and variables form.
 *
 * @param {Object} template - need to display template name
 * @param {Object} document - contains all document info
 * @param {boolean} isRecognize - if we are on recognize page
 * @param {function} submitAction - currentle is always 'train' that gets form values
 * @param {Array} templateVariablesId - ids of current template
 * @param {Object} variables - list of variables by id
 * @param {function} focusVariable - get id as argument
 * @param {Object} formContent - will be used as 'initialValues'
 */

const PdfEdit = ({
    template,
    document,
    isRecognize,
    submitAction,
    templateVariablesId,
    variables,
    focusVariable,
    formContent,
    trained,
}) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Grid
                item
                xs={12}
                className={classes.cell}
            >
                <Typography
                    variant="h1"
                    component="h1"
                    className={classes.title}
                >
                    {document.name}
                </Typography>
            </Grid>
            {
                template && (
                    <Grid
                        item
                        xs={12}
                        className={`${classes.cell} ${classes.type}`}
                    >
                        <Typography component="span">
                            {`Document type: `}
                        </Typography>
                        <Typography variant="caption" component="span">
                            <RouterStyledLink to={`${paths.templates}/${template.id}`}>{template.name}</RouterStyledLink>
                        </Typography>
                    </Grid>
                )
            }
            {
                isRecognize && <DocumentInfo document={document} />
            }
            <TrainForm
                isRecognize={isRecognize}
                submitAction={submitAction}
                templateVariablesId={templateVariablesId}
                variables={variables}
                focusVariable={focusVariable}
                initialValues={formContent}
                document={document}
                trained={trained}
            />
        </Grid>
    );
};

export default PdfEdit;