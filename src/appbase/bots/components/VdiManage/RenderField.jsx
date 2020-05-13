import { FormControl, InputBase, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%',
    },
    textField: {
        padding: '5px 10px',
        fontSize: 16,
        border: `1px solid ${theme.palette.grey.A100}`,
    },
    label: {
        fontSize: 12,
        marginLeft: 10,
        textTransform: 'capitalize',
    },
}));

const RenderField = ({ input, meta: { touched, error } }) => {
    const classes = useStyles();
    return (
        <FormControl className={classes.formControl}>
            <label
                className={classes.label}
                htmlFor={input.name}
            >
                {input.name.replace(/_/g, ' ')}
                <Typography
                    color="error"
                    component="span"
                    className={classes.label}
                >
                    {touched && error}
                </Typography>
            </label>
            <InputBase
                {...input}
                className={classes.textField}
                id={input.name}
            />
        </FormControl>
    );
};

export default RenderField;
