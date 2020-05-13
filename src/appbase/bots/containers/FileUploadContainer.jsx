import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import * as actions from '../state/actions';
import * as selectors from '../state/selectors';
import FileUpload from '../components/FileUpload';


const FileUploadContainer = ({ match }) => {
    const dispatch = useDispatch();

    const { userId } = match.params;
    const botId = match.params.id;

    const files = useSelector(selectors.bot(botId)).files || [];

    const uploadFile = (files) => {
        if (Array.isArray(files)) {
            files.map((file) => {
                const formData = new FormData();
                formData.append('file', file);
                dispatch(actions.uploadFile({ user_id: userId, bot_id: botId, file: formData }));
            });
        } else {
            Object.keys(files).map((key) => {
                const file = files[key];
                const formData = new FormData();
                formData.append('file', file);
                dispatch(actions.uploadFile({ user_id: userId, bot_id: botId, file: formData }));
            });
        }
    };

    const deleteFile = (file_id) => {
        dispatch(actions.deleteFile({ user_id: userId, bot_id: botId, file_id }));
    };

    return (
        <FileUpload
            uploadFile={uploadFile}
            deleteFile={deleteFile}
            files={files}
        />
    );
};

export default compose(
    withRouter,
)(FileUploadContainer);
