import React from 'react';

import HeadTag from '../appbase/_common/HeadTag';
import DashboardTabsContainer from '../appbase/bots/containers/DashboardTabsContainer';

const BotList = () => (
    <>
        <HeadTag title="Dashboard"/>
        <DashboardTabsContainer />
    </>
);

export default BotList;