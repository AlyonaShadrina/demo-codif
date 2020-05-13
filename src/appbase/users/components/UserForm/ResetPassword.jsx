import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Field } from 'redux-form';

import RenderField from '../../../_common/RenderTextFieldBordered';


const ResetPassword = () => (
    <Grid
        container
        spacing={2}
        alignItems="center"
    >
        <Grid
            item
            xs={12}
        >
            <Typography
                variant="caption"
                component="h2"
            >
                    Reset password
            </Typography>
        </Grid>
        <Grid
            item
            xs={4}
        >
            <Field
                component={RenderField}
                type="password"
                autocomplete="new-password"
                name="password"
                label="Password"
                marginBottom={2}
            />
        </Grid>
        <Grid
            item
            xs={4}
        >
            <Field
                component={RenderField}
                type="password"
                autocomplete="new-password"
                name="password_confirmation"
                label="Password confirmation"
                marginBottom={2}
            />
        </Grid>
    </Grid>
);

export default ResetPassword;
