import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Field } from 'redux-form';

import RenderField from '../../../_common/RenderTextFieldBordered';


const OfficeDetails = () => (
    <Grid
        container
        spacing={2}
        alignItems="center"
    >
        <Grid item xs={12}>
            <Typography
                variant="caption"
                component="h2"
            >
                    Office details
            </Typography>
        </Grid>
        <Grid item xs={4}>
            <Field
                component={RenderField}
                name="department"
                label="Department"
                marginBottom={2}
            />
        </Grid>
        <Grid item xs={4}>
            <Field
                component={RenderField}
                name="office_location"
                label="Office location"
                marginBottom={2}
            />
        </Grid>
    </Grid>
);

export default OfficeDetails;
