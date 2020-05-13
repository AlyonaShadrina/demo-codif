import { Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useState } from 'react';

import BotDescription from '../BotDescription';
import LogTree from '../LogTree';
import ToggleExpandIcon from './ToggleExpandIcon';
import ProgressInfo from './ProgressInfo';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginBottom: 50,
        paddingLeft: 40,
        paddingRight: 40,
        position: 'relative',
    },
    description: {
        marginBottom: 30,
    },
    logTree: {
        border: `1px solid ${theme.palette.borders.main}`,
        padding: '30px 25px',
    },
}));

const BotCard = ({
    bot, i, userId, ...other
}) => {
    const classes = useStyles();

    const [isExpanded, setExpanded] = useState(false);

    const toggleExpanded = () => setExpanded(!isExpanded);
    return (
        <Paper
            square
            className={classes.paper}
            {...other}
        >
            <ToggleExpandIcon isExpanded={isExpanded} toggleExpanded={toggleExpanded} />

            <Grid container spacing={6}>
                <Grid item xs={9}>
                    <BotDescription
                        bot={bot}
                        titleIsLink
                        className={classes.description}
                        userId={userId}
                    />
                    <LogTree isExpanded={isExpanded} className={classes.logTree} />
                </Grid>
                <Grid item xs={3}>
                    <ProgressInfo isExpanded={isExpanded} bot={bot} />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default BotCard;
