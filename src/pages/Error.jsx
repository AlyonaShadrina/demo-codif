import { Typography, Box, makeStyles } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Cookies from 'js-cookie';
import React from 'react';
import { useDispatch } from 'react-redux';

import HeadTag from "../appbase/_common/HeadTag";
import { withRouter } from 'react-router';
import RouterStyledLink from '../appbase/_common/RouterStyledLink';
import * as actions from '../appbase/auth/state/actions';
import { PROJECT_NAME } from '../config';
import { notifications, errorMessages, paths } from "../dictionary";

const useStyles = makeStyles(theme => ({
    link: {
        marginBottom: 10,
        '& a': {
            color: theme.palette.primary.main
        }
    },
}));

const Error = ({ match }) => {
    const classes = useStyles();

    const { status } = match.params;

    const dispatch = useDispatch();

    const hasCookie = !!Cookies.get(PROJECT_NAME);

    const logOut = () => {
        dispatch(actions.logout());
        if (hasCookie) {
            Cookies.remove(PROJECT_NAME);
            window.location = '/';
            dispatch(actions.removeAuthTokenAC());
        } else {
            window.location = paths.login;
        }
    };

    return (
        <div className="loadingErrorContainer">
            <HeadTag title="Error page"/>
            <Box mb={1}>
                <Typography>This is error page.</Typography>
            </Box>
            <Typography
                variant="h2"
                component="h1"
                color="primary"
            >
                {status}
            </Typography>
            <Box mb={4} mt={1}>
                <Typography>{errorMessages[status] ? errorMessages[status] : notifications.errors.default}</Typography>
            </Box>
            <Typography variant="h1">
                <RouterStyledLink to="/" className={classes.link}>
                    Go to dashboard
                </RouterStyledLink>
            </Typography>
            <Box mb={1}>
                or
            </Box>
            <Link onClick={logOut}>{hasCookie ? 'Logout' : 'Login'}</Link>
        </div>
    )
};

export default withRouter(Error);