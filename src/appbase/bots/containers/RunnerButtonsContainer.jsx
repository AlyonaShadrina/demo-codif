import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';

import { notifications } from '../../../dictionary';
import { enqueueSnackbar } from '../../_layout/state/actions';
import RunnerButtons from '../components/RunnerButtons';
import * as actions from '../state/actions';


const RunnerButtonsContainer = ({ cantStart, match }) => {
    const dispatch = useDispatch();

    const { userId } = match.params;
    const botId = match.params.id;

    const startBot = () => {
        dispatch(enqueueSnackbar({
            message: notifications.confirms.botRunRequest,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'info',
            },
        }));
        dispatch(actions.runBot({ user_id: userId, bot_id: botId }));
    };

    const stopBot = () => {
        dispatch(actions.stopBot({ user_id: userId, bot_id: botId }));
    };

    return (
        <RunnerButtons startBot={startBot} stopBot={stopBot} cantStart={cantStart} />
    );
};

export default withRouter(RunnerButtonsContainer);
