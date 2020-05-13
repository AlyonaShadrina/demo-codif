import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import Add from '../../../assets/icons/Add';


const useStyles = makeStyles(() => ({
    addBtnIcon: {
        marginRight: 10,
    },
}));

const AddButtonOutlined = ({ text, disabled, ...restProps }) => {
    const classes = useStyles();

    return (
        <Button
            size="small"
            color="primary"
            disabled={disabled}
            {...restProps}
        >
            <Add fill={disabled ? 'lightgrey' : 'primary'} className={classes.addBtnIcon} />
            {text}
        </Button>
    );
};

export default AddButtonOutlined;
