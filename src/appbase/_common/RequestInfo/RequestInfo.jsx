import {
    Box, CircularProgress, makeStyles, Typography,
} from '@material-ui/core';
import React from 'react';
import colors from '../../../styles/colors';


const useStyles = makeStyles((theme) => ({
    confirm: {
        color: colors.green,
    },
}));

const RequestInfo = ({
    loading, ok, fail, ...restProps
}) => {
    const classes = useStyles();

    return (
        <Box {...restProps}>
            <Typography color="error">{fail}</Typography>
            <Typography className={classes.confirm}>{ok}</Typography>
            {loading && <CircularProgress disableShrink size={15} />}
        </Box>
    );
};

export default RequestInfo;
