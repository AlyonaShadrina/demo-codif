import { Chip, makeStyles } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    status: {
        fontSize: 12,
        lineHeight: 1,
    },
    statusdisabled: {
        color: theme.palette.error.main,
        background: theme.palette.error.light,
    },
    statusactivated: {
        color: theme.palette.primary.main,
        background: theme.palette.primary.light,
    },
}));

const StatusChip = ({ label }) => {
    const classes = useStyles();

    return (
        <Chip
            size="small"
            label={label}
            classes={{
                sizeSmall: `${classes.status} ${classes[`status${label}`]}`,
            }}
        />
    );
};

export default StatusChip;
