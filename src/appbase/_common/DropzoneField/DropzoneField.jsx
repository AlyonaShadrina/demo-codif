import { makeStyles, Grid, Typography } from '@material-ui/core';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import Upload from '../../../assets/icons/Upload';

const useStyles = makeStyles((theme) => ({
    container: {
        border: '2px dashed #C4C4C4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        cursor: 'pointer',
        padding: theme.spacing(3),
        paddingTop: theme.spacing(4),
    },
    disabled: {
        opacity: 0.6,
        cursor: 'not-allowed',
    },
}));


const DropzoneField = ({
    uploadFile, disabled, className, infoText,
}) => {
    const classes = useStyles();

    const onDrop = useCallback((acceptedFiles) => {
        uploadFile(acceptedFiles);
    }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
    } = useDropzone({
        onDrop,
        // accept: 'application/pdf',
        noClick: disabled,
        disabled,
    });

    return (
        <div {...getRootProps()}>
            <input
                {...getInputProps()}
                // accept="application/pdf"
            />
            <Grid
                container
                className={`${classes.container} 
                ${disabled ? classes.disabled : ''} ${className}`}
                justify="center"
                alignItems="center"
            >
                <Upload fill="primary" />
                { infoText && <p>{infoText}</p> }
                {
                    isDragActive
                        ? <p>Drop the files here ...</p>
                        : <p>Drag'n'drop or click to select files</p>
                }
                {isDragReject && <Typography color="error">This files will cause error.</Typography>}
            </Grid>
        </div>
    );
};

export default DropzoneField;
