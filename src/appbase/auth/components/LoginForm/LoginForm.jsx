import {
    Button, Grid, makeStyles, Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';

import { reduxFormNames } from '../../../../config';
import withAuth from '../../../../hocs/withAuth';
import ForgotPasswordContainer from '../../containers/ForgotPasswordContainer';
import RenderField from '../../../_common/RenderTextFieldBordered';
import RequestInfo from '../../../_common/RequestInfo';
import validate from '../../validate';


const useStyles = makeStyles(() => ({
    right: {
        minHeight: '100vh',
    },
    form: {
        width: '500px',
        maxWidth: '100%',
        margin: 'auto',
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

const LoginForm = ({
    handleSubmit, authError, history, invalid, submitting, title, isLoggedIn,
}) => {
    const classes = useStyles();

    useEffect(() => {
        if (isLoggedIn) {
            history.push('/');
        }
    }, [isLoggedIn]);


    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.right}
        >
            <div className="transitionContainer">
                <Typography
                    component="h1"
                    className="primaryHeading"
                >
                    {title || 'Sign In'}
                </Typography>
                <Grid
                    container
                    component="form"
                    direction="column"
                    alignItems="center"
                    className={classes.form}
                    onSubmit={handleSubmit}
                >
                    <Field
                        name="username"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        label="Email"
                        component={RenderField}
                    />
                    <Field
                        name="password"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        label="Password"
                        component={RenderField}
                    />
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        className={classes.button}
                        size="large"
                        disabled={invalid || submitting}
                    >
                        Sign In
                    </Button>
                    <RequestInfo
                        pt={2}
                        className={classes.info}
                        fail={authError}
                    />
                </Grid>
                <ForgotPasswordContainer />
            </div>
        </Grid>
    );
};

export default compose(
    withAuth,
    withRouter,
    reduxForm({
        form: reduxFormNames.login,
        validate,
    }),
)(LoginForm);
