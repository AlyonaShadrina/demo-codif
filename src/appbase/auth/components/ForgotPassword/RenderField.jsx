import {
    Grid, InputBase, makeStyles, Typography,
} from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    textField: {
        borderRadius: '0',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
        height: 32,
        width: '100%',
        border: `1px solid ${theme.palette.grey.A100}`,
    },
    label: {
        fontSize: 12,
        marginLeft: 10,
        marginBottom: 5,
    },
}));

const RenderField = ({
    input, meta: { touched, error }, id, type, placeholder, className, ...restProps
}) => {
    const classes = useStyles();

    return (
        <Grid
            item
            xs={8}
        >
            <label
                htmlFor={id}
                className={classes.label}
            >
                Enter your email to reset password.
                {
                    touched && error
                        ? (
                            <Typography
                                color="error"
                                component="span"
                                variant="subtitle1"
                            >
                                {` ${error}`}
                            </Typography>
                        )
                        : null
                }
            </label>
            <InputBase
                {...input}
                id={id}
                placeholder={placeholder}
                type={type}
                className={`${classes.textField} ${className}`}
                {...restProps}
            />
        </Grid>
    );
};

export default RenderField;
