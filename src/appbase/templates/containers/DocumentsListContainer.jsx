import {
    Box, makeStyles, Typography, Paper,
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import values from 'lodash/fp/values';

import WorkflowsTable from '../components/DocumentsList';
import * as actions from '../state/actions';
import * as selectors from '../state/selectors';


const useStyles = makeStyles(() => ({
    searchContainer: {
        padding: '20px 30px 0',
    },
    divider: {
        marginBottom: 30,
    },
    paper: {
        padding: 0,
    },
}));

const DocumentsListContainer = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const { loading, data, meta } = useSelector(selectors.documents);

    const allDocsList = data;

    const stopRequest = () => {
        dispatch(actions.cancelGetDocumentsList());
    };

    useEffect(() => {
        dispatch(actions.requestGetDocumentsList());
        return stopRequest;
    }, []);

    return (
        <>
            <Typography
                variant="h1"
                className="pageTitle"
            >
                Workflows
                {
                    loading
                        && (
                            <Box px={2} component="span">
                                <CircularProgress
                                    disableShrink
                                    size={25}
                                    style={{ display: 'inline-block', verticalAlign: 'middle' }}
                                />
                                <Box component="span" px={1}>
                                    <Typography
                                        variant="body2"
                                        component="span"
                                        style={{ display: 'inline-block', verticalAlign: 'middle' }}
                                    >
                                    Loading all uploaded documents...
                                    </Typography>
                                </Box>
                            </Box>
                        )
                }
            </Typography>
            <Paper className={classes.paper}>
                <WorkflowsTable
                    documents={values(allDocsList)}
                />
            </Paper>
        </>
    );
};


export default DocumentsListContainer;
