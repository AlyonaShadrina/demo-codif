import { Paper } from '@material-ui/core';
import React from 'react';

import withUsersForBotCreation from '../../../../hocs/withUsersForBotCreation';

import WrappingTitle from '../../../_common/WrappingTitle';
import FileUpload from '../../containers/FileUploadContainer';
import StatisticsContainer from '../../containers/StatisticsContainer';
import VariablesContainer from '../../containers/VariablesContainer';
import UsersAssignContainer from '../../containers/UsersAssignContainer';
import VdiInfoContainer from '../../containers/VdiInfoContainer';
import BotAASettings from '../BotAASettings';
import FileDownload from '../FileDownload';
import LogTree from '../LogTree';
import SubbotList from '../SubbotList';
import SummaryCard from '../SummaryCard';

const UsersAssignContainerWithHOC = withUsersForBotCreation(UsersAssignContainer);

const formNavData = ({
    bot,
    updateBot,
    updateBotVdi,
    classes,
    files,
    botStatusNotEditable,
    isUser,
}) => ([
    {
        id: 'summary',
        name: 'Summary',
        component: (
            <SummaryCard
                bot={bot}
                isUser={isUser}
                botStatusNotEditable={botStatusNotEditable}
                updateBot={updateBot}
                initialValues={
                    isUser
                        ? {
                            start_datetime: bot.start_datetime,
                        }
                        : {
                            name: bot.name,
                            description: bot.description,
                            start_datetime: bot.start_datetime,
                        }
                }
            />
        ),
        gridWidth: 12,
        visibleForUser: true,
    },
    {
        id: 'assignUsers',
        name: 'Assign Users',
        component: (
            <WrappingTitle
                title="Assign Users"
                className={classes.sectionContainer}
            >
                <Paper>
                    <UsersAssignContainerWithHOC
                        bot={bot}
                        initialValues={{
                            user_ids: (bot && bot.users) ? bot.users.map((user) => user.id) : [],
                        }}
                        botStatusNotEditable={botStatusNotEditable}
                    />
                </Paper>
            </WrappingTitle>
        ),
        gridWidth: 12,
        visibleForUser: false,
    },
    {
        id: 'VDIInfo',
        name: 'Run Environment',
        component: (
            <WrappingTitle
                title="Run Environment"
                className={classes.sectionContainer}
            >
                <VdiInfoContainer
                    isUser={isUser}
                    botId={bot.id}
                    botVdi={bot.vdi}
                    botStatusNotEditable={botStatusNotEditable}
                    updateBotVdi={updateBotVdi}
                />
            </WrappingTitle>
        ),
        gridWidth: 12,
        visibleForUser: true,
    },
    {
        id: 'aaSettings',
        name: 'AA Settings',
        component: (
            <WrappingTitle
                title="AA Settings"
                className={classes.sectionContainer}
            >
                <BotAASettings
                    bot={bot}
                    editable={!botStatusNotEditable && !isUser}
                    updateBot={updateBot}
                    initialValues={{
                        aa_base_file_path: bot.aa_base_file_path,
                        aa_bot_name: bot.aa_bot_name,
                    }}
                />
            </WrappingTitle>
        ),
        gridWidth: 12,
        visibleForUser: false,
    },
    {
        id: 'historicalState',
        name: 'Run Statistics',
        component: (
            <WrappingTitle
                title="Run Statistics"
                className={`${classes.history} ${classes.sectionContainer}`}
            >
                <StatisticsContainer />
            </WrappingTitle>
        ),
        gridWidth: 12,
        visibleForUser: true,
    },
    {
        id: 'variables',
        name: 'Input Values',
        component: (
            <WrappingTitle
                title="Bot Input Values"
                className={classes.sectionContainer}
            >
                <VariablesContainer
                    isUser={isUser}
                    botStatusNotEditable={botStatusNotEditable}
                />
            </WrappingTitle>
        ),
        gridWidth: 12,
        visibleForUser: true,
    },
    {
        id: 'fileUpload',
        name: 'Input Files',
        component: (
            <div className={classes.sectionContainer}>
                <FileUpload
                    files={files}
                    botStatusNotEditable={botStatusNotEditable}
                />
            </div>
        ),
        gridWidth: 12,
        visibleForUser: true,
    },
    {
        id: 'fileDownload',
        name: 'Output Files',
        component: (
            <WrappingTitle
                title="Bot Output Files"
                className={classes.sectionContainer}
            >
                <FileDownload files={files} />
            </WrappingTitle>
        ),
        gridWidth: 12,
        visibleForUser: true,
    },
    // {
    //     id: 'helperBots',
    //     name: 'Helper Bots',
    //     component: (
    //         <WrappingTitle
    //             title="Helper Bots"
    //             className={classes.sectionContainer}
    //         >
    //             <SubbotList
    //                 list={subbotList}
    //                 editable={!botStatusNotEditable}
    //             />
    //         </WrappingTitle>
    //     ),
    //     gridWidth: 4,
    //     visibleForUser: true,
    // },
    {
        id: 'logTree',
        name: 'Log Tree',
        component: (
            <WrappingTitle
                title="BOT Log"
                className={classes.sectionContainer}
            >
                <Paper>
                    <LogTree
                        isExpanded
                        className={classes.logTree}
                    />
                </Paper>
            </WrappingTitle>
        ),
        gridWidth: 12,
        visibleForUser: true,
    },
]);

export default formNavData;
