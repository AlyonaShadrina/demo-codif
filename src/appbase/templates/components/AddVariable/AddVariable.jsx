import { makeStyles, MenuItem } from '@material-ui/core';
import React from 'react';
import { Field } from 'redux-form';

import { reduxFormNames } from '../../../../config';
import AddButtonWithModalForm from '../../../_common/AddButtonWithModalForm';
import RenderField from '../../../_common/RenderTextFieldBordered';
import RenderSelectField from '../../../_common/RenderSelectFieldBordered';
import validate from './validate';


const useStyles = makeStyles(theme => ({
    fieldContainer: {
        marginBottom: theme.spacing(5),
    },
}));

const AddVariable = ({ addVariable, variablesTypes, initialValues }) => {
    const classes = useStyles();

    return (
        <AddButtonWithModalForm
            addButtonText="Add new variable"
            dialogTitle="Add new variable"
            form={reduxFormNames.addVariable}
            onSubmitAction={addVariable}
            initialValues={initialValues}
            validate={validate}
        >
            <Field
                name="template_id"
                component="input"
                type="hidden"
            />
            <Field
                name="name"
                type="text"
                label="Variable label"
                placeholder="Enter variable label"
                id="var_label"
                component={RenderField}
                required
            />
            <Field
                name="type_id"
                component={RenderSelectField}
                className={classes.fieldContainer}
                label="Variable type"
            >
                {
                    variablesTypes.map((variable) => (
                        <MenuItem value={variable.id} key={variable.id}>
                            {variable.type_name}
                        </MenuItem>
                    ))
                }
            </Field>
        </AddButtonWithModalForm>
    )
};

export default AddVariable;