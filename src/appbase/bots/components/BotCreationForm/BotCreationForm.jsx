import React from 'react';
import {
    Paper, Button, Typography, Box,
} from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';

import { notifications } from '../../../../dictionary';
import { reduxFormNames } from '../../../../config';
import BotDescription from '../BotDescription';
import UserMultipleSelect from '../UserMultipleSelect';
import validate from './validate';


const BotCreationForm = ({
    handleSubmit, userList, change, createBot, submitFailed, invalid, pristine,
}) => {
    const selectOnChange = (val) => {
        const ids = (val || []).map((user) => user.value);
        change('user_ids', ids);
    };

    return (
        <Paper>
            <form onSubmit={handleSubmit(createBot)}>
                <BotDescription editable />
                <Field name="user_ids" type="hidden" component="input" />
                <Box my={3}>
                    <UserMultipleSelect
                        options={userList}
                        onChange={selectOnChange}
                    />
                </Box>
                <Box my={3}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={invalid || pristine}
                    >
                        Create
                    </Button>
                    <Box component="span" ml={2}>
                        <Typography color="error" variant="body2" component="span" ml={2}>
                            {submitFailed && notifications.errors.addBot}
                        </Typography>
                    </Box>
                </Box>
            </form>
        </Paper>
    );
};

export default reduxForm({
    form: reduxFormNames.addBot,
    validate,
})(BotCreationForm);
