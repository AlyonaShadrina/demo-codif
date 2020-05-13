import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: `${theme.spacing(4)}px ${theme.spacing(4)}px 0`,
    },
    title: {
        color: theme.palette.common.white,
        fontSize: 60,
        fontWeight: 'bold',
        marginBottom: 50,
    },
    text: {
        color: theme.palette.common.white,
        margin: '0 auto 100px',
        maxWidth: 340,
        lineHeight: '40px',
    },
    button: {
        color: theme.palette.common.white,
        border: `1px solid ${theme.palette.common.white}`,
        transition: 'transform .25s cubic-bezier(.74,-2,.89,1.58)',
        '&:focus': {
            transform: 'scale(1.1)',
        },
    },
}));

const LoginModePanel = ({
    title, text, className, button, action,
}) => {
    const classes = useStyles();

    return (
        <div className={`${classes.container} ${className}`}>
            <Typography
                component="h1"
                variant="h1"
                className={classes.title}
            >
                {title}
            </Typography>
            <Typography
                variant="h2"
                component="p"
                className={classes.text}
            >
                {text}
            </Typography>
            {/* <Button */}
            {/*    color="secondary" */}
            {/*    className={classes.button} */}
            {/*    onClick={action} */}
            {/*    size="large" */}
            {/* > */}
            {/*    {button} */}
            {/* </Button> */}
        </div>
    );
};

export default LoginModePanel;
