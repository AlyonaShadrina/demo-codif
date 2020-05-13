import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

import Plus from '../../../assets/icons/Plus';


const useStyles = makeStyles(() => ({
    button: {
        height: 36,
        fontSize: 14,
        border: 'none',
        boxShadow: '0 3px 8px -2px rgba(66, 163, 255, .25)',
        minWidth: 162,
        paddingLeft: 20,
        paddingRight: 20,
        fontWeight: 400,
    },
    buttonIcon: {
        marginRight: 12,
    },
}));

const AddButton = ({ action, text }) => {
    const classes = useStyles();

    return (
        <Button
            className={classes.button}
            onClick={action}
        >
            <Plus
                title={text}
                className={classes.buttonIcon}
                fill="primary"
            />
            {text}
        </Button>
    );
};

export default AddButton;
