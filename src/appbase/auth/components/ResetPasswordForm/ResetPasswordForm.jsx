import {
    Button, Grid, makeStyles, Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';

import { reduxFormNames } from '../../../../config';
import RenderField from '../../../_common/RenderTextFieldBordered';
import RequestInfo from '../../../_common/RequestInfo';
import validate from './validate';


const useStyles = makeStyles((theme) => ({
    right: {
        minHeight: '100vh',
    },
    form: {
        width: '500px',
        maxWidth: '100%',
        position: 'relative',
    },
    button: {
        marginBottom: 60,
    },
    info: {
        position: 'absolute',
        bottom: 15,
        width: '100%',
        textAlign: 'center',
    },
}));

const ResetPasswordForm = ({
    handleSubmit, initialValues, change, loading, ok, fail,
}) => {
    const classes = useStyles();

    // in case there is no values at first render
    useEffect(() => {
        Object.keys(initialValues).map((key) => (
            change(key, initialValues[key])
        ));
    }, [initialValues]);


    return (

        <div>
            <Typography>
                Reset password
            </Typography>
            <Grid
                container
                component="form"
                direction="column"
                alignItems="flex-start"
                className={classes.form}
                onSubmit={handleSubmit}
            >
                <Field
                    name="token"
                    id="token"
                    type="hidden"
                    component={RenderField}
                />
                <Field
                    name="email"
                    id="email"
                    type="hidden"
                    component={RenderField}
                />
                <Field
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    label="New password"
                    autocomplete="off"
                    component={RenderField}
                />
                <Field
                    name="password_confirmation"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    label="Confirm password"
                    autocomplete="off"
                    component={RenderField}
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    // className={classes.button}
                    size="small"
                >
                    Send
                </Button>
                <RequestInfo
                    pt={2}
                    className={classes.info}
                    loading={loading}
                    ok={ok}
                    fail={fail}
                />
            </Grid>
        </div>
    );
};

export default compose(
    withRouter,
    reduxForm({
        form: reduxFormNames.resetPassword,
        validate,
    }),
)(ResetPasswordForm);
