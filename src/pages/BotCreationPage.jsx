import React from 'react';

import HeadTag from '../appbase/_common/HeadTag';
import BotCreationContainer from '../appbase/bots/containers/BotCreationContainer';


const BotCreationPage = () => {
    return (
        <>
            <HeadTag title="Create BOT"/>
            <BotCreationContainer />
        </>
    );
};

export default BotCreationPage;