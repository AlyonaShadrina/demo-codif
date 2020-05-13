import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';

import { profile } from '../../profile/state/selectors';
import Statistics from '../components/Statistics';
import * as actions from '../state/actions';
import * as selectors from '../state/selectors';

const StatisticsContainer = ({ match }) => {
    const dispatch = useDispatch();

    const { userId } = match.params;
    const botId = match.params.id;

    const { id } = useSelector(profile);
    const currentBot = useSelector(selectors.bot(botId));

    const [statistics, setStatistics] = useState({
        on_last_days: 30,
        data: {},
    });

    const setPeriod = (value) => {
        if (botId && id) {
            dispatch(actions.getBotStatistics({
                user_id: userId,
                bot_id: botId,
                on_last_days: value,
            }));
        }
    };

    useEffect(() => {
        if (currentBot && currentBot.statistics) {
            setStatistics(currentBot.statistics);
        }
    }, [currentBot]);

    useEffect(() => {
        setPeriod(statistics.on_last_days);
    }, []);

    return (
        <Statistics
            data={statistics.data}
            period={statistics.on_last_days}
            setPeriod={setPeriod}
        />
    );
};

export default withRouter(StatisticsContainer);
