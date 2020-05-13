import {
    makeStyles, Typography, Input, Grid, Paper, Button, Box,
} from '@material-ui/core';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { reduxFormNames } from '../../../../config';
import { placeholders } from '../../../../dictionary';
import validate from './validate';


const useStyles = makeStyles(() => ({
    inputTitle: {
        display: 'block',
    },
    inputDescr: {
        display: 'block',
    },
    text: {
        wordWrap: 'break-word',
    },
}));

const RenderField = ({
    input, placeholder, label, meta: { touched, error }, ...restProps
}) => (
    <>
        <Typography variant="overline">
            {`${label} `}
            {touched && error && (
                <Typography variant="overline" color="error" component="span">{error}</Typography>
            )}
        </Typography>
        <Input
            {...input}
            disableUnderline
            placeholder={placeholder}
            {...restProps}
        />
    </>
);

/**
 * Component that render editable or not editable AA settings.
 *
 * @param {Object} bot - from state
 * @param {boolean} editable - if true, inputs will be rendered
 * @param {function} updateBot
 */

// aa_base_file_path: 'My Tasks\\Sample Tasks\\',
// aa_bot_name: 'apitestapi.atmx',

const BotAASettings = ({
    bot, editable, updateBot, handleSubmit, invalid, pristine, ...restProps
}) => {
    const classes = useStyles();

    const disabled = !bot.vdi;

    if (editable) {
        return (
            <Paper>
                <form onSubmit={handleSubmit(updateBot)}>
                    <Grid container spacing={3} alignItems="flex-end">
                        <Grid item xs={12} md={5}>
                            <Field
                                name="aa_base_file_path"
                                placeholder={placeholders.bot.aa_base_file_path}
                                component={RenderField}
                                disabled={disabled}
                                label="aa base file path"
                            />
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Field
                                name="aa_bot_name"
                                placeholder={placeholders.bot.aa_bot_name}
                                label="aa bot name"
                                component={RenderField}
                                disabled={disabled}
                            />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                disabled={invalid || pristine}
                            >
                                Update
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                {disabled && (
                    <Box mt={2}>
                        <Typography variant="subtitle1">Choose run environment to set AA.</Typography>
                    </Box>
                )}
            </Paper>
        );
    }

    return (
        <Paper>
            <Grid container {...restProps}>
                <Grid item xs={12} md={6}>
                    <Typography variant="overline">
                        aa base file path
                    </Typography>
                    <Typography className={classes.text}>
                        {bot.aa_base_file_path.length > 0 ? bot.aa_base_file_path : '--'}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="overline">
                        aa bot name
                    </Typography>
                    <Typography className={classes.text}>
                        {bot.aa_bot_name.length > 0 ? bot.aa_bot_name : '--'}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default reduxForm({
    form: reduxFormNames.editBotAA,
    enableReinitialize: true,
    destroyOnUnmount: false,
    validate,
})(BotAASettings);
