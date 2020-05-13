import React from 'react';
import { makeStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import ArrowBack from '../../../assets/icons/ArrowBack';
import arrowBack from '../../../assets/icons/arrowBack.png';
import RouterStyledLink from '../RouterStyledLink';

const useStyles = makeStyles((theme) => ({
    container: {
        marginBottom: 30,

    },
    iconContainer: {
        position: 'relative',
        verticalAlign: 'baseline',
        lineHeight: 1,
        overflow: 'hidden',
        display: 'inline-block',
        marginRight: 30,
        '&:before': {
            content: '""',
            backgroundImage: `url("${arrowBack}")`,
            backgroundRepeat: 'no-repeat',
            display: 'block',
            width: 50,
            position: 'absolute',
            top: 7,
            height: 10,
            right: '-115%',
            transition: 'transform .2s',
        },
    },
    link: {
        background: 'transparent',
        border: 'none',
        ...theme.typography.body1,
        cursor: 'pointer',
        color: theme.palette.text.primary,
        '&:hover': {
            textDecoration: 'underline',
        },
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

const BackButton = ({
    title, history, path, noArrow, className,
}) => {
    const classes = useStyles();

    const pageName = title ? `Back to ${title}` : 'Go back';

    if (path) {
        return (
            <div className={`${classes.container} ${className}`}>
                <RouterStyledLink to={path} className={classes.link}>
                    { !noArrow
                    && (
                        <div className={classes.iconContainer}>
                            <ArrowBack fill="text" className={classes.linkIcon} title="Go back" />
                        </div>
                    )}
                    {pageName}
                </RouterStyledLink>
            </div>
        );
    }

    return (
        <div className={`${classes.container} ${className}`}>
            <button onClick={history.goBack} className={classes.link}>
                { !noArrow
                && (
                    <div className={classes.iconContainer}>
                        <ArrowBack fill="text" className={classes.linkIcon} title="Go back" />
                    </div>
                )}
                {pageName}
            </button>
        </div>
    );
};

export default withRouter(BackButton);
