import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Paper, Box } from '@material-ui/core';
import { withRouter } from 'react-router';

import AddTemplate from '../components/AddTemplate';
import TemplatesList from '../components/TemplatesList';
import * as actions from '../state/actions';
import * as selectors from '../state/selectors';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: 0,
    },
}));

const TemplatesListContainer = ({ history }) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const templates = useSelector(selectors.templateList);
    const { addTemplateLoading } = useSelector(selectors.templatesIsLoading);

    const uploadFile = (templateId, action) => {
        history.push(`/templates/${templateId}/${action}/upload`);
    };

    const add = (values) => {
        dispatch(actions.requestAddTemplate({ values, history }));
    };

    const del = (id) => {
        dispatch(actions.requestDeleteTemplate(id));
    };

    const edit = (data) => {
        const { id } = data;
        history.push(`/templates/${id}`);
    };

    useEffect(() => {
        dispatch(actions.requestTemplatesList());
    }, []);

    return (
        <Paper className={classes.paper}>
            <Box p={3}>
                <AddTemplate
                    add={add}
                    initialValues={{
                        issuer: 'issuer',
                        is_stable: true,
                    }}
                    isLoading={addTemplateLoading}
                />
            </Box>
            <TemplatesList
                templates={templates}
                del={del}
                edit={edit}
                uploadFile={uploadFile}
            />
        </Paper>
    );
};

export default withRouter(TemplatesListContainer);
