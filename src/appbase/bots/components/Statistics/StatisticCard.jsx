import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import ArrowStat from '../../../../assets/icons/ArrowStat';
import colors from '../../../../styles/colors';
import switchIcon from '../../../../utils/switchIcon';


const useStyles = makeStyles(theme => ({
    paper: {
        paddingTop: 15,
    },
    name: {
        marginBottom: 10,
    },
    hasGoodStats: {
        color: colors.green,
        fontWeight: 500,
    },
    hasBadStats: {
        color: colors.red,
        fontWeight: 500,
    },
    statIcon: {
        verticalAlign: 'sub',
    },
}));

const StatisticCard = ({ info, infoKey, period }) => {
    const classes = useStyles();

    return (
        <Grid
            item
            xs={12}
            md={4}
        >
            <Paper className={classes.paper}>
                <Grid
                    container
                    alignItems="center"
                    className={classes.name}
                >
                    <Grid
                        item
                        xs={10}
                    >
                        <Typography
                            component="h3"
                            variant="caption"
                            className="capitalize"
                        >
                            {info.title}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={2}
                    >
                        {switchIcon(infoKey)}
                    </Grid>
                </Grid>
                <div className="largeHeading">
                    {info.value}
                </div>
                <Typography variant="body2">
                    {
                        info.percent >= 0
                            ? (
                                <span className={classes.hasGoodStats}>
                                    <ArrowStat
                                        className={classes.statIcon}
                                        fill="green"
                                    /> {`${info.percent}% `}
                                </span>
                            )
                            : (
                                <span className={classes.hasBadStats}>
                                    <ArrowStat
                                        className={classes.statIcon}
                                        fill="red"
                                        down
                                    /> {`${info.percent}% `}
                                </span>
                            )
                    }
                    in last {period} days
                </Typography>
            </Paper>
        </Grid>
    )
};

export default StatisticCard;