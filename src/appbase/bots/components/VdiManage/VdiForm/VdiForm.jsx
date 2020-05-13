import { Grid } from '@material-ui/core';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

import validate, { createVdiFields } from '../validate';
import RenderField from '../RenderField';
import ActionButtons from './ActionButtons';


const VdiForm = ({
    vdi,
    deleteVdi,
    isUser,
    onVdiSubmit,
    SubmitButton,
    handleSubmit,
    invalid,
    pristine,
}) => {
    const vdiSubmit = (values) => {
        onVdiSubmit(values);
    };

    const handleDelete = () => {
        if (deleteVdi && vdi) {
            deleteVdi(vdi.id);
        }
    };

    return (
        <form onSubmit={handleSubmit(vdiSubmit)}>
            <Grid
                container
                spacing={4}
                justify="center"
            >
                {createVdiFields.map((vdiKey) => (
                    <Grid item xs={12} md={6} lg={4} key={vdiKey}>
                        <Field
                            component={RenderField}
                            type="text"
                            name={vdiKey}
                            id={`${vdi ? vdi.id : ''}-${vdiKey}`}
                            disabled={isUser}
                        />
                    </Grid>
                ))}
                {!isUser && (
                    <Grid item xs={12}>
                        <Grid
                            container
                            justify={deleteVdi ? 'flex-end' : 'center'}
                            spacing={3}
                        >
                            <ActionButtons
                                handleDelete={deleteVdi ? handleDelete : null}
                                SubmitButton={SubmitButton}
                                vdiName={vdi ? vdi.app_name : ''}
                                invalid={invalid}
                                pristine={pristine}
                            />
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </form>
    );
};

export default reduxForm({
    validate,
    enableReinitialize: true,
})(VdiForm);
