import React from 'react';
import { NativeSelect, InputBase, makeStyles } from '@material-ui/core';
import ChevronDown from '../../../../assets/icons/ChevronDown';


const useStyles = makeStyles(theme => ({
    sort: {
        position: 'absolute',
        right: 0,
        top: 0,
    },
    label: {
        paddingRight: 10,
    },
    select: {
        color: theme.palette.primary.main,
        paddingRight: 10,
        '& select': {
            paddingRight: 5,
            fontSize: 16,
        }
    }
}));

const Sort = ({ period, setPeriod }) => {
    const classes = useStyles();

    const options = [
        {
            value: 10,
            label: 10,
        },
        {
            value: 20,
            label: 20,
        },
        {
            value: 30,
            label: 30,
        },
    ];

    const handleChange = (event) => {
        setPeriod(event.target.value);
    };

    return (
        <div className={classes.sort}>
            <span className={classes.label}>Sort: last</span>
            <NativeSelect
                value={period}
                onChange={handleChange}
                IconComponent={() => <ChevronDown fill="primary"/>}
                input={<InputBase name="history" id="history-customized-native-simple" />}
                className={classes.select}
            >
                {
                    options.map((option, i) => (
                        <option key={i} value={option.value}>{option.label}</option>
                    ))
                }
            </NativeSelect>
            days
        </div>
    )
};

export default Sort;