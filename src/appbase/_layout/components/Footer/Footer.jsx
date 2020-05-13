import {
    Box, Link, makeStyles, Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';
import AuthContext from "../../../../providers/AuthProvider/AuthContext";

const useStyles = makeStyles((theme) => ({
    footer: {
        height: 50,
        padding: 15,
        textAlign: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: theme.palette.common.white,
    },
}));

const Footer = () => {
    const classes = useStyles();

    const { provideAuth } = useContext(AuthContext);

    const resultOfFubc = provideAuth('мои аргументі');
    console.log(resultOfFubc);

    const handleClick = (e) => provideAuth(e)
    return (
        <Box
            className={classes.footer}
            component="footer"
            onClick={handleClick}
        >
            <Typography variant="body2">
                2019 Copyright ©
                {' '}
                <Link href="/">Neuralify</Link>
            </Typography>
        </Box>
    );
};

export default Footer;
