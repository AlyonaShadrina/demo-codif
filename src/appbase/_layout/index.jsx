import { Container, makeStyles } from '@material-ui/core';
import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';


const useStyles = makeStyles(() => ({
    container: {
        marginTop: 50,
        paddingBottom: 80 + 50,
    },
}));

const Layout = ({ children, fullWidth }) => {
    const classes = useStyles();

    return (
        <>
            <Header />
            {
                fullWidth
                    ? children
                    : (
                        <Container className={classes.container}>
                            {children}
                        </Container>
                    )
            }
            <Footer />
        </>
    );
};

export default Layout;
