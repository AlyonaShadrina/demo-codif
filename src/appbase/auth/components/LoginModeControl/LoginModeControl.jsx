import { Button, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import logoWhite from '../../../../assets/logo-white.svg';

import logo from '../../../../assets/logo.svg';
import ContactFormContainer from '../../containers/ContactFormContainer';
import LoginFormContainer from '../../containers/LoginFormContainer';

import LoginModePanel from '../LoginModePanel';
import { BackgroundDecoration } from './BackgroundDecoration';


const btnTransitionDelay = '.25s';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        backgroundColor: theme.palette.primary.main,
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
        transition: 'all .4s',
        // filter: 'brightness(0) invert(1)',
    },
    formContainer: {
        position: 'absolute',
        backgroundColor: theme.palette.common.white,
        width: '75%',
        height: '100vh',
        transform: 'translateX(0)',
        transition: 'transform .7s ease-in-out',
    },
    formContainerLeft: {
        left: '-67%',
        transform: 'translateX(0)',
        overflowX: 'hidden',
        '& .transitionContainer': {
            transform: 'translateX(300%)',
            transition: 'transform .6s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
            // transition: 'transform .4s ',
        },
    },
    formContainerLeftActive: {
        transform: 'translateX(100%)',
        transitionDelay: '0.2s',
        '& .transitionContainer': {
            transform: 'translateX(0)',
            transitionDelay: '0.32s',
        },
    },
    formContainerRight: {
        right: '-67%',
        transform: 'translateX(0)',
        overflowX: 'hidden',
        '& .transitionContainer': {
            transform: 'translateX(-300%)',
            transition: 'transform .6s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
            // transition: 'transform .4s ',
        },
    },
    formContainerRightActive: {
        transform: 'translateX(-100%)',
        transitionDelay: '0.2s',
        '& .transitionContainer': {
            transform: 'translateX(0)',
            transitionDelay: '0.32s',
        },
    },
    modeContainer: {
        position: 'relative',
    },
    button: {
        display: 'inline-block',
        transition: 'transform .6s',
        transitionDelay: btnTransitionDelay,
        '& button': {
            height: 51,
            color: theme.palette.common.white,
            border: `1px solid ${theme.palette.common.white}`,
        },
        '& [class*="buttonTxtContact"]': {
            opacity: 0,
        },
    },
    buttonLoginMode: ({ windowSize }) => ({
        transform: `translateX(${66.6 * windowSize / 100}px)`,
        transitionDelay: btnTransitionDelay,
        '& [class*="buttonTxtContact"]': {
            opacity: 1,
        },
        '& [class*="buttonTxtSignIn"]': {
            opacity: 0,
        },
    }),
    buttonTxtContact: {
        position: 'absolute',
        transition: 'opacity .2s',
        transitionDelay: btnTransitionDelay,
    },
    buttonTxtSignIn: {
        position: 'absolute',
        transition: 'opacity .2s',
        transitionDelay: btnTransitionDelay,
    },
    logoWhite: {
        opacity: 0,
    },
    logoWhiteTranslate: {
        transitionDelay: '.2s',
        opacity: '1',
    },
    logoHide: {
        opacity: 0,
    },
    modePanel: {
        transition: 'transform .5s ease-in-out',
    },
    modePanelLeft: {
        transform: 'translateX(-30px)',
    },
    modePanelRight: {
        transform: 'translateX(30px)',
    },
    modePanelMoved: {
        transform: 'translateX(0)',
    },
    modePanelMovedDelay: {
        transform: 'translateX(0)',
        transitionDelay: '.3s',
    },
}));

const LoginModeControl = () => {
    const [isLoginMode, setLoginMode] = useState(true);
    const [isAnimatedBtn, setAnimatedBtn] = useState(false);

    const toggleMode = () => {
        setLoginMode((oldValue) => !oldValue);
        setAnimatedBtn(true);

        setTimeout(() => {
            setAnimatedBtn(false);
        }, '1000');
    };

    const getSize = () => window.innerWidth;
    const [windowSize, setWindowSize] = useState(getSize);
    const handleResize = () => {
        setWindowSize(getSize());
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const classes = useStyles({ windowSize });


    return (
        <Grid
            container
            className={classes.container}
            justify="space-between"
            alignItems="center"
        >
            <BackgroundDecoration moved={!isLoginMode} />
            <Grid item xs={4} className={classes.modeContainer}>
                <LoginModePanel
                    title="Welcome Back!"
                    text="To keep connected with us please login with your personal info."
                    button="Sign In"
                    action={toggleMode}
                    className={`${classes.modePanel} ${classes.modePanelLeft} ${!isLoginMode ? classes.modePanelMovedDelay : ''}`}
                />
                <div
                    className={`${classes.button} ${isLoginMode ? classes.buttonLoginMode : ''}`}
                >
                    <Button
                        color="secondary"
                        size="large"
                        onClick={toggleMode}
                        className={isAnimatedBtn ? 'scaleBtn' : ''}
                    >
                        <span className={`${classes.buttonTxtContact} buttonTxtContact`}>Contact us</span>
                        <span className={`${classes.buttonTxtSignIn} buttonTxtSignIn`}>Sign In</span>
                    </Button>
                </div>

            </Grid>
            <Grid item xs={4}>
                <LoginModePanel
                    title="Welcome"
                    text="Simply send us a message to request access."
                    button="Contact us"
                    action={toggleMode}
                    className={`${classes.modePanel} ${classes.modePanelRight} ${isLoginMode ? classes.modePanelMovedDelay : ''}`}
                />
            </Grid>

            <Grid
                item
                xs={8}
                className={`
                    ${classes.formContainer} 
                    ${classes.formContainerLeft}
                    ${isLoginMode ? classes.formContainerLeftActive : ''}
                `}
            >
                <LoginFormContainer />
            </Grid>
            <Grid
                item
                xs={8}
                className={`
                    ${classes.formContainer} 
                    ${classes.formContainerRight}
                    ${isLoginMode ? '' : classes.formContainerRightActive}
                `}
            >
                <ContactFormContainer />
            </Grid>
            <img
                src={logo}
                alt="codif white logo"
                className={`${classes.logo} ${!isLoginMode ? classes.logoHide : ''}`}
            />
            <img
                src={logoWhite}
                alt="codif blue logo"
                className={`${classes.logo} ${isLoginMode ? classes.logoHide : ''}`}
            />
        </Grid>
    );
};

export default LoginModeControl;
