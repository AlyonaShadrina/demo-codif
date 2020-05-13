import React from 'react';
import { makeStyles } from '@material-ui/core';

import ArrowBack from '../../../assets/icons/ArrowBack';
import arrowBack from '../../../assets/icons/arrowBack.png';
import RouterStyledLink from '../RouterStyledLink';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 40,
        textAlign: 'right',
    },
    iconContainer: {
        position: 'relative',
        verticalAlign: 'baseline',
        lineHeight: 0.5,
        overflow: 'hidden',
        display: 'inline-block',
        marginLeft: 30,
        transform: 'rotateZ(180deg)',
        '&:before': {
            content: '""',
            backgroundImage: `url("${arrowBack}")`,
            backgroundRepeat: 'no-repeat',
            display: 'block',
            width: 50,
            position: 'absolute',
            top: 3,
            height: 10,
            right: '-115%',
            transition: 'transform .2s',
        },
    },
    link: {
        color: theme.palette.text.primary,
        '&:hover div:before': {
            transform: 'translateX(-115%)',
        },
        '&:hover svg': {
            transform: 'translateX(-100%)',
        },
    },
    linkIcon: {
        transition: 'transform .2s',
    },
}));

const ForwardButton = ({
    title, path, noArrow, className,
}) => {
    const classes = useStyles();

    if (path) {
        return (
            <div className={`${classes.container} ${className}`}>
                <RouterStyledLink to={path} className={classes.link}>
                    {title}
                    { !noArrow
                    && (
                        <div className={classes.iconContainer}>
                            <ArrowBack fill="text" className={classes.linkIcon} title="Go next" />
                        </div>
                    )}
                </RouterStyledLink>
            </div>
        );
    }
    return null;
};

export default ForwardButton;
