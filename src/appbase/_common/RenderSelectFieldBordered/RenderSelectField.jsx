import {
    FormControl, makeStyles, Select, Typography,
} from '@material-ui/core';
import React from 'react';
import colors from '../../../styles/colors';

const useStyles = makeStyles((theme) => ({
    formControl: {
        textAlign: 'left',
        width: '100%',
    },
    textField: {
        border: `1px solid ${colors.lightGrey}`,
        boxShadow: 'none',
        padding: '13px 10px',
        maxHeight: 47,
        '&:hover:not([class*="disabled"])': {
            boxShadow: 'none',
        },
        '& input, & textarea': {
            paddingTop: 13,
            paddingBottom: 13,
            borderRadius: '0',
            paddingLeft: 10,
            paddingRight: 10,
            fontSize: 16,
            border: `1px solid ${theme.palette.grey.A100}`,
            marginBottom: 40,
        },
    },
    label: {
        fontSize: 14,
        marginLeft: 10,
        marginBottom: 5,
    },
}));

const RenderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    className,
    menuClassList,
    selectClass,
    onChange,
    placeholder,
    open,
    id,
    ...custom
}) => {
    const classes = useStyles();
    return (
        <FormControl
            className={classes.formControl}
        >
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
            <span>
                <Select
                    {...input}
                    id={id}
                    placeholder={placeholder}
                    className={`${classes.textField} ${className}`}
                    disableUnderline
                    // if you add custom icon, it becomes unclickable
                    {...custom}
                >
                    {children}
                </Select>
            </span>
        </FormControl>

    );
};

export default RenderSelectField;
