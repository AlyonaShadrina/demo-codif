import React from 'react';
import BotCard from '../BotCard';


const BotList = ({
    value, index, botList, userId, ...other
}) => (
    <div id={`bot-tabpanel-${index}`}>
        {
            botList.length === 0
                ? <span>No bots yet!</span>
                : botList.map((bot, i) => (
                    <BotCard
                        key={i}
                        bot={bot}
                        i={i}
                        userId={userId}
                        {...other}
                    />
                ))
        }
    </div>
);

export default BotList;
