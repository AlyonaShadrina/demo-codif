import {
    Button, makeStyles,
} from '@material-ui/core';
import React, { useRef } from 'react';

const useStyles = makeStyles((theme) => ({
    instructions: {
        color: theme.palette.text.secondary,
    },
    marginBottom: {
        marginBottom: 25,
    },
    choose: {
        display: 'none',
    },
}));

const ChooseFilesButton = ({
    uploadFile, multiple, buttonProps, buttonText,
}) => {
    const classes = useStyles();

    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.click();
    };

    const handleChange = (e) => {
        uploadFile(e.target.files);
    };
    return (
        <>
            <input
                ref={inputEl}
                type="file"
                className={classes.choose}
                onChange={handleChange}
                multiple={multiple}
                data-testid="uploadFile"
                // accept="application/pdf"
            />
            <Button
                variant="outlined"
                color="primary"
                onClick={onButtonClick}
                {...buttonProps}
            >
                {buttonText || 'Choose file'}
            </Button>
        </>
    );
};

export default ChooseFilesButton;
