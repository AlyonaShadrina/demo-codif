import { Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { placeholders } from '../../../../../dictionary';

import ActionButtons from './ActionButtons';
import RenderField from './RenderField';
import switchVariable from './switchVariable';
import validate from './validate';


const useStyles = makeStyles((theme) => ({
    form: ({ isUser }) => ({
        marginBottom: isUser ? 0 : theme.spacing(1),
        '& .MuiTextField-root': {
            position: 'relative',
            width: '100%',
        },
        '& .MuiFormHelperText-root': {
            position: 'absolute',
            bottom: -theme.spacing(3),
        },
        '& .MuiTypography-colorError': {
            color: !isUser ? theme.palette.text.disabled : theme.palette.error.main,
        },
    }),
    userLabel: {
        fontSize: 12,
    },
}));

/**
 * Redux form that has 4 fields.
 *
 * If form has `id` value it means variable already exists and needs to be updated
 * (if admin, we show two editable fields).
 * If not, new variable should be created.
 *
 * Only admin can create variable. On creation, only 'label' field exist.
 *
 * User can only edit values.
 *
 * Every variable has `type_id`, so it must be passed in `initialValues`.
 *
 * @param {function} updateVariable
 * @param {function} createVariable
 * @param {function} deleteVariable
 * @param {string} form - form key in store
 * @param {Object} variablesTypesById - need to display icon and label
 * @param {Object} initialValues - type_id is required
 * @param {number} keyToDel - index in map, will be deleted in container new values array
 * @param {boolean} botStatusNotEditable
 * @param {boolean} isUser
 */

const VariableForm = ({
    botStatusNotEditable,
    isUser,
    variablesTypesById,
    updateVariable,
    createVariable,
    deleteVariable,
    keyToDel,
    form,
    initialValues,
    handleSubmit,
    destroy,
    change,
    pristine,
    invalid,
}) => {
    const classes = useStyles({ isUser });

    const { label } = variablesTypesById[initialValues.type_id];

    const handleSend = (values) => {
        if (values.id) {
            updateVariable(values);
        } else if (values.label && values.label.length) {
            createVariable(values, keyToDel);
        }
    };

    const [date, setDate] = useState(initialValues.values ? initialValues.values : '');
    const handleDateChange = (value) => {
        const valueToSet = value.isValid() ? value.format() : value;
        setDate(valueToSet);
        change('values', valueToSet);
    };

    const fieldWidthMd = isUser ? 10 : botStatusNotEditable ? 6 : 5;

    return (
        <form onSubmit={handleSubmit(handleSend)} className={classes.form}>
            <Grid container spacing={isUser ? 1 : 3} alignItems="center" justify="flex-start">
                <Field
                    name="id"
                    component="input"
                    type="hidden"
                />
                <Field
                    name="type_id"
                    component="input"
                    type="hidden"
                />
                <Grid item xs={12} md={fieldWidthMd}>
                    {
                        isUser ? (
                            <Typography variant="overline" component="div" className={classes.userLabel}>{initialValues.label}</Typography>
                        ) : (
                            <Field
                                name="label"
                                component={RenderField}
                                type="text"
                                placeholder={placeholders.bot.variable.label(label.toLowerCase())}
                                label={label}
                                disabled={botStatusNotEditable}
                            />
                        )
                    }
                </Grid>
                {
                    initialValues.id && (
                        <Grid item xs={12} md={fieldWidthMd}>
                            {switchVariable({
                                initialValues,
                                date,
                                botStatusNotEditable,
                                handleDateChange,
                                label,
                                change,
                            })}
                        </Grid>
                    )
                }
                <Grid item xs={2} md={2}>
                    <ActionButtons
                        invalid={invalid}
                        pristine={pristine}
                        initialValues={initialValues}
                        form={form}
                        destroy={destroy}
                        deleteVariable={deleteVariable}
                        botStatusNotEditable={botStatusNotEditable}
                        isUser={isUser}
                    />
                </Grid>
            </Grid>
        </form>
    );
};

// destroyOnUnmount with dispatch(destroy(form)) helps not to render deleted variables
export default reduxForm({
    enableReinitialize: true,
    destroyOnUnmount: false,
    validate,
})(VariableForm);
