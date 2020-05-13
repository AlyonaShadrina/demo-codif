import { InputBase, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    inputContainer: {
        marginBottom: theme.spacing(2),
    },
}));

const RenderField = ({
    input, className, placeholder, multiline, beforeOnChange, InfoTip, meta,
}) => {
    const classes = useStyles();

    const handleChange = (e) => {
        if (beforeOnChange) {
            beforeOnChange(e);
        }
        input.onChange(e);
    };

    return (
        <div className={classes.inputContainer}>
            <InputBase
                {...input}
                className={className}
                placeholder={placeholder}
                multiline={multiline}
                onChange={handleChange}
            />
            {InfoTip && <InfoTip touched={meta.touched} />}
        </div>
    );
};

export default RenderField;
