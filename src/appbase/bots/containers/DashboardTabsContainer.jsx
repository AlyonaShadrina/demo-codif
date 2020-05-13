import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';

import Loading from '../../_common/Loading';
import DashboardTabs from '../components/DashboardTabs';
import * as actions from '../state/actions';
import * as selectors from '../state/selectors';


const DashboardTabsContainer = ({ match }) => {
    const dispatch = useDispatch();

    const { userId } = match.params;

    const getBotStatuses = () => {
        dispatch(actions.getUserBotStatuses(userId));
    };

    useEffect(() => {
        getBotStatuses();
    }, [userId]);

    const userStatuses = useSelector(selectors.userStatuses);


    if (Object.keys(userStatuses).length === 0) {
        return <Loading />;
    }

    return (
        <DashboardTabs
            userStatuses={userStatuses}
            getBotStatuses={getBotStatuses}
            userId={userId}
        />
    );
};

export default withRouter(DashboardTabsContainer);
