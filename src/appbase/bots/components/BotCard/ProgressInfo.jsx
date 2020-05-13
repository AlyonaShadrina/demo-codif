import {
    Box, Grid, makeStyles, Paper, Typography,
} from '@material-ui/core';
import React from 'react';

import formatDateFromUtc from '../../../../utils/formatDateFromUtc';
import { botStartDatetimeFormat } from '../../../../config';
import CircularProgress from '../../../_common/CirclularProgress';
import SubbotList from '../SubbotList';


const useStyles = makeStyles((theme) => ({
    timeLink: {
        color: theme.palette.text.primary,
        textDecoration: 'none',
    },
    timePaper: {
        maxWidth: 100,
        padding: '10px 20px',
        marginBottom: 5,
    },
    width100: {
        width: '100%',
    },
    progressLg: {
        fontSize: 50,
    },
    countInfo: {
        color: theme.palette.text.secondary,
        marginBottom: 30,
    },
    vdiTitle: {
        marginBottom: 20,
    },
    circleProgress: {
        maxWidth: 210,
        margin: '0 auto 20px',
    },
    sideColumn: {
        paddingTop: 30,
    },
}));

const ProgressInfo = ({ bot, isExpanded }) => {
    const classes = useStyles();

    return (
        <Grid
            container
            justify="space-evenly"
            direction={isExpanded ? 'column' : 'row'}
            alignItems="center"
            className={classes.sideColumn}
        >
            <Grid item xs={isExpanded ? 12 : 6}>
                <CircularProgress
                    percentage={bot.progress}
                    className={isExpanded ? classes.circleProgress : ''}
                    fill={bot.status && bot.status.code}
                />
            </Grid>

            <Grid
                item
                xs={isExpanded ? 12 : 6}
                className={isExpanded ? classes.width100 : ''}
            >
                <Grid
                    container
                    justify="space-evenly"
                    direction={isExpanded ? 'row' : 'column'}
                    alignItems="center"
                >
                    <Grid
                        item
                        xs={12}
                        display={isExpanded ? 'block' : 'none'}
                        component={Box}
                    >
                        <Typography
                            variant="body2"
                            align="center"
                            className={classes.countInfo}
                        >
                            {/* 32 of 32 324 completed */}
                        </Typography>
                        <Typography
                            variant="h2"
                            align="center"
                            className={classes.vdiTitle}
                        >
                            Run Environment
                        </Typography>
                        {
                            bot.subbotList
                                ? (
                                    <SubbotList list={bot.subbotList} />
                                )
                                : null
                        }
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        component={Paper}
                        square
                        elevation={0}
                        className={classes.timePaper}
                    >
                        <Typography
                            variant="overline"
                            display="block"
                            align="center"
                        >
                            Start time
                        </Typography>
                        <Typography
                            variant="body2"
                            align="center"
                            style={{ overflowWrap: 'break-word' }}
                        >
                            {formatDateFromUtc(bot.start_datetime, botStartDatetimeFormat).date || '--'}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        square
                        component={Paper}
                        elevation={0}
                        className={classes.timePaper}
                    >
                        <Typography
                            variant="overline"
                            display="block"
                            align="center"
                        >
                            EST time
                        </Typography>
                        <Typography
                            variant="body2"
                            align="center"
                        >
                            {bot.end_datetime || '--'}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ProgressInfo;
