import { Button, Grid } from '@material-ui/core';
import React from 'react';


const RunnerButtons = ({ startBot, stopBot, cantStart }) => (
    <Grid container spacing={4} justify="center">
        <Grid item>
            <Button
                variant="contained"
                color="primary"
                // size="large"
                onClick={startBot}
                disabled={cantStart}
            >
                Start BOT
            </Button>
        </Grid>
        <Grid item>
            <Button
                variant="outlined"
                color="primary"
                // size="large"
                onClick={stopBot}
                disabled={!cantStart}
            >
                Stop BOT
            </Button>
        </Grid>
    </Grid>
);

export default RunnerButtons;
