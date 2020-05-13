import { requestGetFiles, requestDeleteFile, requestUploadFile } from './files';
import { requestRunBot, requestStopBot } from './run';
import {
    requestDeleteVariable, requestGetVariables, requestPatchVariable, requestPostVariable,
} from './variables';
import {
    requestGetUsersForBotCreation,
    requestGetAdminBotList,
    requestGetUserBotStatuses,
    requestGetBotsWithStatus,
    requestGetBot,
    requestBotStatistics,
    requestUpdateBot,
    requestUpdateBotUsers,
    requestScheduleBot,
    requestUpdateBotVdi,
    requestCreateBot,
    requestDeleteBot,
} from './bot';

export { requestRunBot, requestStopBot };
export { requestGetFiles, requestUploadFile, requestDeleteFile };
export {
    requestGetVariables, requestPostVariable, requestPatchVariable, requestDeleteVariable,
};
export {
    requestGetUsersForBotCreation,
    requestGetAdminBotList,
    requestGetUserBotStatuses,
    requestGetBotsWithStatus,
    requestGetBot,
    requestBotStatistics,
    requestUpdateBot,
    requestUpdateBotUsers,
    requestScheduleBot,
    requestUpdateBotVdi,
    requestCreateBot,
    requestDeleteBot,
};
