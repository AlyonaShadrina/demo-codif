import React from 'react';
import {
    Typography, Grid, makeStyles, LinearProgress,
} from '@material-ui/core';

import getPercents from '../../../../utils/getPercents';
import colors from '../../../../styles/colors';


const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0 15px',
    },
    card: {
        padding: '60px 15px',
    },
    name: {
        marginBottom: 20,
    },
    Confirm: {
        backgroundColor: colors.violet,
    },
    Complete: {
        backgroundColor: colors.green,
    },
    Review: {
        backgroundColor: colors.red,
    },
}));

const StatusInfo = ({ statusItems }) => {
    const classes = useStyles();

    let total = 0;
    statusItems.map((item) => total += item.count);

    return (
        <Grid container className={classes.container}>
            {
                statusItems.map((item, i) => (
                    <Grid item xs={12} md={3} className={classes.card} key={i}>
                        <Typography variant="h1" className="largeHeading">
                            {item.count}
                        </Typography>
                        <Typography variant="body2" className={classes.name}>
                            {item.name}
                        </Typography>
                        <LinearProgress
                            className={classes.margin}
                            classes={{
                                bar: classes[item.name],
                            }}
                            variant="determinate"
                            value={getPercents(item.count, total)}
                        />
                    </Grid>
                ))
            }
        </Grid>
    );
};

export default StatusInfo;
