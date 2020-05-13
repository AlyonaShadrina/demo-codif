import { makeStyles } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        '& > div': {
            transitionProperty: 'transform',
            transitionDuration: '0.5s',
            transitionDelay: '0.1s',
            // transitionTimingFunction: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
            // transitionTimingFunction: 'cubic-bezier(.08,.55,.92,.59)',
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        },
    },
    medium: {
        transform: 'translateX(40px)',
        transitionDuration: '0.3s',
        transitionDelay: '.1s',
    },
    small: {
        transform: 'translateX(60px)',
        transitionDelay: '.1s',
    },
    xSmall: {
        transform: 'translateX(120px)',
        transitionDelay: '.05s',
    },
    circle: ({ size, ...position }) => ({
        position: 'absolute',
        backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 100%)',
        borderRadius: '100%',
        width: size,
        height: size,
        ...position,
    }),
}));

const BackgroundCircle = ({ size = 310, position = { top: 0, left: 50 } }) => {
    const classes = useStyles({ size, ...position });

    return (
        <div className={classes.circle} />
    );
};

export const BackgroundDecoration = ({ moved }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={moved ? classes.xSmall : ''}>
                <BackgroundCircle position={{ top: '10%', left: '15%' }} size={34} />
                <BackgroundCircle position={{ top: '10%', left: '30%' }} size={34} />
                <BackgroundCircle position={{ bottom: '10%', right: '5%' }} size={34} />
            </div>
            <div className={moved ? classes.small : ''}>
                <BackgroundCircle position={{ top: '25%', right: '50%' }} size={168} />
                <BackgroundCircle position={{ top: '15%', right: '30%' }} size={168} />
                <BackgroundCircle position={{ top: '25%', right: '15%' }} size={168} />
            </div>
            <div className={moved ? classes.medium : ''}>
                <BackgroundCircle position={{ top: '25%', left: '-5%' }} />
                <BackgroundCircle position={{ top: '50%', left: '65%' }} />
                <BackgroundCircle position={{ top: '-5%', right: '-5%' }} />
            </div>
            <div>
                <BackgroundCircle size={410} position={{ bottom: '-10%', left: '25%' }} />
            </div>
        </div>
    );
};
