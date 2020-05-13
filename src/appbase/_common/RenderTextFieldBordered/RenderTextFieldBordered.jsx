import {
    FormControl, InputBase, makeStyles, Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    formControl: {
        textAlign: 'left',
        width: '100%',
    },
    textField: ({ marginBottom }) => ({
        '& input, & textarea': {
            paddingTop: 13,
            paddingBottom: 13,
            borderRadius: '0',
            paddingLeft: 10,
            paddingRight: 10,
            fontSize: 16,
            border: `1px solid ${theme.palette.grey.A100}`,
            marginBottom: marginBottom || 40,
        },
    }),
    label: {
        fontSize: 14,
        marginLeft: 10,
        marginBottom: 5,
    },
}));

const RenderTextFieldBordered = ({
    input, meta: { touched, error }, id, type, placeholder, label, className, marginBottom, autocomplete, ...restProps
}) => {
    const classes = useStyles({ marginBottom });

    return (
        <FormControl className={classes.formControl}>
            <label
                htmlFor={id}
                className={classes.label}
            >
                {label}
                {
                    touched && error
                        ? (
                            <Typography
                                color="error"
                                component="span"
                                variant="body2"
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
                inputProps={{
                    autocomplete,
                }}
            />
        </FormControl>
    );
};

export default RenderTextFieldBordered;
