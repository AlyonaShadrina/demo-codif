import { Fab, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    pageNum: {
        width: 40,
        height: 40,
        background: 'transparent',
        boxShadow: 'none',
        border: '1px solid #000',
        marginRight: 10,
    },
    pageNumActive: {
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
    },
}));

const PageButtons = ({ total, current, makeRequest }) => {
    const classes = useStyles();

    const handleClick = (e) => makeRequest({ 'page[number]': parseInt(e.currentTarget.innerText) });

    const buttons = [];

    for (let i = 0; i < total; i++) {
        buttons.push(
            <Fab
                key={i}
                className={`${classes.pageNum} ${current - 1 === i ? classes.pageNumActive : ''}`}
                onClick={handleClick}
            >
                {i + 1}
            </Fab>,
        );
    }

    return (
        <>{buttons}</>
    );
};

export default PageButtons;
