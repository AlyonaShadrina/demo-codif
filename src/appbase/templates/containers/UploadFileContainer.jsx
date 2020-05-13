import { Box, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';

import DropzoneField from '../../_common/DropzoneField';
import Loading from '../../_common/Loading';
import UploadAnalyzeProcess from '../components/UploadAnalyzeProcess';
import UploadTitle from '../components/UploadTitle';
import * as actions from '../state/actions';
import * as selectors from '../state/selectors';

const useStyles = makeStyles((theme) => ({
    dropzone: {
        minHeight: '40vh',
    },
}));

const UploadFileContainer = ({ history, match }) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const templateId = match.params.id;
    const { action } = match.params;

    const { upload } = useSelector(selectors.documents);
    const { document, isAnalyzing } = upload;
    const template = useSelector(selectors.templateList)[templateId];

    useEffect(() => {
        dispatch(actions.requestTemplate(templateId));
        // we had to race to stop polling in case component unmount (user don't want to wait anymore)
        return () => dispatch(actions.stopPollAnalyzeResult());
    }, []);

    const uploadFile = (files) => {
        const formData = new FormData();
        formData.append('file', files[0]);
        dispatch(actions.uploadFile({
            file: formData, history, action, templateId,
        }));
    };

    if (!template) {
        return <Loading />;
    }

    return (
        <Grid container direction="column" style={{ textAlign: 'center' }}>
            <UploadTitle action={action} template={template} />
            <Box mb={3}>
                <DropzoneField
                    uploadFile={uploadFile}
                    disabled={isAnalyzing}
                    className={classes.dropzone}
                    infoText="All files must be *.pdf"
                />
            </Box>
            <UploadAnalyzeProcess isAnalyzing={isAnalyzing} document={document} />
        </Grid>
    );
};

export default withRouter(UploadFileContainer);
