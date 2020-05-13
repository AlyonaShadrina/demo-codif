import React from 'react';

import BackButton from '../appbase/_common/BackButton';
import HeadTag from '../appbase/_common/HeadTag';
import BotSettingsContainer from '../appbase/bots/containers/BotSettingsContainer';


const BotPage = () => {
    return (
        <>
            <HeadTag title="BOT settings"/>
            <BackButton path={'/'} title="Dashboard"/>
            <BotSettingsContainer />
        </>
    );
};

export default BotPage;