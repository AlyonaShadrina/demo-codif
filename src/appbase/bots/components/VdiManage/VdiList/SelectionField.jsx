import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

import BigSelect from '../../../../../assets/icons/BigSelect';
import textSelect from '../../../../../assets/text-select.svg';


const useStyles = makeStyles(theme => ({
    label: {
        position: 'relative',
    },
    input: {
        position: 'absolute',
        opacity: 0,
        '&:checked + [class*="selectVDI"]': {
            background: theme.palette.primary.main
        },
    },
    selectVDI: ({ disabled }) => ({
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        '&:hover': !disabled ? {
            backgroundImage: `url(${textSelect})`,
            boxShadow: `0px 0px 8px rgba(66, 163, 255, 0.3)`,
            cursor: 'pointer',
        } : {
            backgroundImage: `none`,
            boxShadow: `none`,
            cursor: 'not-allowed',
        }
    }),
}));


const SelectionField = ({ handleSelect, isSelected, disabled }) => {
    const classes = useStyles({ disabled });

    return (
        <label className={classes.label}>
            <input
                name="vdi"
                type="radio"
                className={classes.input}
                onChange={handleSelect}
                checked={isSelected}
                disabled={disabled}
            />
            <Grid
                className={classes.selectVDI + ' selectVDI'}
                container
                component='div'
                direction='column'
                justify='center'
                alignItems='center'
            >
                <BigSelect fill='primary' />
            </Grid>
        </label>
    )
};

export default SelectionField;