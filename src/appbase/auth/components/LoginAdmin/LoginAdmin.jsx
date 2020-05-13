import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import loginAdminDecorate from '../../../../assets/login-admin-decorate.svg';
import logo from '../../../../assets/logo.svg';
import LoginFormContainer from '../../containers/LoginFormContainer';


const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        textAlign: 'center',
        position: 'relative',
        maxWidth: '100%',
        overflow: 'hidden',
    },
    logo: {
        position: 'absolute',
        top: 50,
        left: 80,
        width: 114,
        height: 41,
    },
    decorativePanel: {
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        overflow: 'hidden',
    },
}));

const LoginAdmin = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            className={classes.container}
            justify="space-between"
            alignItems="center"
        >
            <Grid
                item
                xs={8}
                className={`
                    ${classes.formContainer} 
                `}
            >
                <LoginFormContainer title="Sign in to admin" />
            </Grid>
            <Grid item xs={4} className={classes.decorativePanel}>
                <img
                    src={loginAdminDecorate}
                    alt="decoration"
                />
            </Grid>
            <img
                src={logo}
                alt="codif blue logo"
                className={classes.logo}
            />
        </Grid>
    );
};

export default LoginAdmin;
