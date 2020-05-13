import { makeStyles } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import colors from '../../styles/colors';


const useStyles = makeStyles((theme) => ({
    success: {
        borderRadius: 16,
        background: colors.green,
        // background: theme.palette.common.white,
        // color: colors.green,
        // fontWeight: 500,
        // boxShadow: '0px 4px 16px rgba(0, 171, 132, 0.1)',
    },
    error: {
        borderRadius: 16,
        background: theme.palette.error.main,
        // background: theme.palette.common.white,
        // color: colors.red,
        // fontWeight: 500,
        // boxShadow: '0px 4px 16px rgba(250, 128, 114, 0.1)',
    },
    warning: {
        borderRadius: 16,
        background: theme.palette.error.main,
        // background: theme.palette.common.white,
        // color: colors.red,
        // fontWeight: 500,
        // boxShadow: '0px 4px 16px rgba(250, 128, 114, 0.1)',
    },
    info: {
        borderRadius: 16,
        background: theme.palette.primary.main,
        // background: theme.palette.common.white,
        // fontWeight: 500,
        // color: theme.palette.text.primary,
        // boxShadow: '0px 4px 16px rgba(128, 128, 128, 0.1)',
    },
}));

const NotificationProvider = ({ children }) => {
    const classes = useStyles();

    return (
        <SnackbarProvider
            maxSnack={2}
            autoHideDuration={4000}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            classes={{
                variantSuccess: classes.success,
                variantError: classes.error,
                variantWarning: classes.warning,
                variantInfo: classes.info,
            }}
        >
            {children}
        </SnackbarProvider>
    );
};

export default NotificationProvider;
