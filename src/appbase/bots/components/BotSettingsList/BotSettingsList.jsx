import { Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

import BotSettingsNav from './BotSettingsNav';
import formNavData from './formNavData';
import WithVisibilitySensor from './WithVisibilitySensor';


const useStyles = makeStyles(() => ({
    history: {
        position: 'relative',
    },
    logTree: {
        paddingLeft: 10,
    },
}));

/**
 * Component renders bot settings sections and bottom navigation.
 * Sections are defined in 'formNavData' function. It takes props and returns array of sections.
 * Array elements are wrapped in 'WithVisibilitySensor' - it makes bottom 'BotSettingsNav' work.
 *
 * @param {Object} bot
 * @param {string} role
 * @param {function} updateBot
 * @param {function} updateBotVdi
 * @param {boolean} botStatusNotEditable
 */

const BotSettingsList = ({
    role,
    bot,
    updateBot,
    updateBotVdi,
    botStatusNotEditable,
}) => {
    const classes = useStyles();

    const { files } = bot;

    const isUser = role === 'user';

    const [visibleSection, setVisibleSection] = useState(0);

    const addVisibleSection = (num) => {
        setVisibleSection(num);
    };

    const props = {
        bot,
        updateBot,
        updateBotVdi,
        classes,
        files,
        botStatusNotEditable,
        isUser,
    };

    const navData = formNavData(props);

    return (
        <>
            <Grid container spacing={8}>
                {
                    navData.map((item, i) => {
                        if (isUser && !item.visibleForUser) {
                            return null;
                        }
                        return (
                            <Grid item sm={12} md={item.gridWidth} key={navData[i].id}>
                                <WithVisibilitySensor
                                    i={i}
                                    addVisibleSection={addVisibleSection}
                                >
                                    <div id={navData[i].id}>
                                        {item.component}
                                    </div>
                                </WithVisibilitySensor>
                            </Grid>
                        );
                    })
                }
            </Grid>

            <BotSettingsNav
                navData={navData}
                visibleSection={visibleSection}
                isUser={isUser}
            />
        </>
    );
};

export default BotSettingsList;
