import {
    Grid, makeStyles, Paper, Typography,
} from '@material-ui/core';
import React from 'react';

import ChooseFilesButton from '../../../_common/ChooseFilesButton';
import DropzoneField from '../../../_common/DropzoneField';
import LinkInput from './LinkInput';
import UploadedFiles from './UploadedFiles';


const useStyles = makeStyles((theme) => ({
    container: {
        paddingRight: 0,
        paddingLeft: 0,
    },
    uploadContainer: {
        padding: '0 30px 25px',
    },
    caption: {
        padding: '0 30px 25px',
    },
    marginBottom: {
        marginBottom: 25,
    },
    textCenter: {
        textAlign: 'center',
    },
}));

const FileUpload = ({ uploadFile, deleteFile, files = [] }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.container}>
            <Grid container className={classes.uploadContainer} spacing={5}>
                <Grid item xs={12} md={6}>
                    <Typography component="h3" variant="caption">
                        Bot Input Files
                    </Typography>
                    <Typography
                        variant="body2"
                        className={`${classes.instructions} ${classes.marginBottom}`}
                    >
                        Upload templated files for the bot to access
                    </Typography>
                    <Grid container justify="center">
                        {/* <LinkInput uploadFile={uploadFile} /> */}
                        {/* <Typography */}
                        {/*    variant="body2" */}
                        {/*    className={`${classes.instructions} ${classes.marginBottom}`} */}
                        {/* > */}
                        {/*    or */}
                        {/* </Typography> */}
                        <Grid item xs={12}>
                            <Grid
                                container
                                justify="center"
                                direction="column"
                                alignItems="center"
                            >
                                <ChooseFilesButton
                                    uploadFile={uploadFile}
                                    multiple
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <DropzoneField uploadFile={uploadFile} />
                </Grid>
            </Grid>
            <UploadedFiles
                files={files}
                deleteFile={deleteFile}
            />
        </Paper>
    );
};

export default FileUpload;
