import {
    Typography, Box, InputBase, makeStyles,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { paths } from '../../../dictionary';
import withDict from '../../../hocs/withDict';

import Loading from '../../_common/Loading';
import ForwardButton from '../../_common/ForwardButton';
import AddVariable from '../components/AddVariable';
import VariableList from '../components/VariableList';
import * as actions from '../state/actions';
import * as selectors from '../state/selectors';


const useStyles = makeStyles(() => ({
    inputTitle: {
        fontSize: 26,
        fontWeight: 500,
        display: 'block',
    },
}));

const TemplateEditContainer = ({ match, variables_types_ml }) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const templateId = match.params.id;
    const template = useSelector(selectors.templateList)[templateId];
    const variables = useSelector(selectors.variableList);

    useEffect(() => {
        dispatch(actions.requestTemplate(templateId));
        dispatch(actions.requestVariables(templateId));
    }, []);

    const editName = (e) => {
        dispatch(actions.requestUpdateTemplate({ id: templateId, name: e.target.value }));
    };

    const addVariable = (values) => {
        dispatch(actions.requestAddVariable(values));
    };

    const editVariable = (data) => {
        dispatch(actions.requestEditVariable(data));
    };

    const deleteVariable = (id) => {
        dispatch(actions.requestDeleteVariable({ variableId: id, templateId }));
    };

    if (
        !template
        || !template.name
        || !template.variables
        || !variables
        || !variables_types_ml
    ) {
        return <Loading />;
    }

    return (
        <div>
            <Box mb={3}>
                <InputBase
                    className={classes.inputTitle}
                    name="name"
                    type="text"
                    onBlur={editName}
                    defaultValue={template.name}
                />
            </Box>
            <Box mb={3}>
                <AddVariable
                    addVariable={addVariable}
                    templateId={templateId}
                    variablesTypes={variables_types_ml}
                    initialValues={{
                        template_id: templateId,
                    }}
                />
            </Box>
            <Typography component="h2" variant="caption" mb={0}>
                Variables
            </Typography>
            <VariableList
                template={template}
                variables={variables}
                deleteVariable={deleteVariable}
                variablesTypes={variables_types_ml}
                editVariable={editVariable}
            />
            <ForwardButton title="Next step: upload file for train" path={`${paths.templates}/${templateId}${paths.trainAction}${paths.templatesUpload}`} />
        </div>
    );
};

export default compose(
    withDict,
    withRouter,
)(TemplateEditContainer);
