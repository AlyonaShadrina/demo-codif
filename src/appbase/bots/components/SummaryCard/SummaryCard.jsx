import { Grid, makeStyles, Paper, Typography, Button, Box } from '@material-ui/core';
import React from 'react';
import { reduxForm } from 'redux-form';

import { reduxFormNames } from '../../../../config';
import { notifications } from '../../../../dictionary';
import CircularProgress from '../../../_common/CirclularProgress';
import RunnerButtonsContainer from '../../containers/RunnerButtonsContainer';
import TimeSettingsContainer from '../../containers/TimeSettingsContainer';
import BotDescription from '../BotDescription';
import validate from './validate';


const useStyles = makeStyles(theme => ({
    paper: {
        marginBottom: 40,
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 40,
    },
    description: {
        marginBottom: 40,
    },
    progressLg: {
        fontSize: 50,
    },
    vdiTitle: {
        marginBottom: 40,
    },
    circleProgress: {
        maxWidth: 210,
        margin: '0 auto 20px',
    },
}));


const SummaryCard = ({ bot, botStatusNotEditable, updateBot, handleSubmit, change, isUser, submitFailed, invalid, pristine, ...other }) => {
    const classes = useStyles();

    return (
        <Paper
            square
            className={classes.paper}
        >
            <Grid container>
                <Grid item xs={9}>
                    <form onSubmit={handleSubmit(updateBot)}>
                        <BotDescription
                            bot={bot}
                            editable={!isUser && !botStatusNotEditable}
                            className={classes.description}
                            updateBot={updateBot}
                        />
                        <Grid container alignItems="flex-end" spacing={3}>
                            <Grid item xs={9}>
                                <TimeSettingsContainer
                                    estimated={bot.estimated}
                                    bot={bot}
                                    change={change}
                                    botStatusNotEditable={botStatusNotEditable}
                                />
                            </Grid>
                            {!botStatusNotEditable && (
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        color="primary"
                                        variant="contained"
                                        disabled={invalid || pristine}
                                    >
                                        Update
                                    </Button>
                                    <Box component="span" ml={2}>
                                        <Typography color="error" variant="body2" component="span" ml={2}>{ submitFailed && notifications.errors.addBot }</Typography>
                                    </Box>
                                </Grid>
                            )}
                        </Grid>
                    </form>
                </Grid>

                <Grid item xs={3}>
                    <CircularProgress
                        percentage={bot.progress}
                        className={classes.circleProgress}
                        fill={bot.status && bot.status.code}
                    />
                    <Typography
                        variant="h2"
                        align="center"
                        className={classes.vdiTitle}
                    >
                        Run Environment
                    </Typography>
                    <RunnerButtonsContainer cantStart={botStatusNotEditable}/>
                </Grid>

            </Grid>
        </Paper>
    )
};

// when clicking back button on bots' vdi settings page,
// initial values hadn't showed on bot settings page.
// so we need enableReinitialize and destroyOnUnmount
// (see https://stackoverflow.com/a/58432964)

export default reduxForm({
    form: reduxFormNames.editBot,
    validate,
    enableReinitialize: true,
    destroyOnUnmount: false,
})(SummaryCard);