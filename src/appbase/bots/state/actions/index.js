import {
    getFiles, uploadFile, deleteFile, setUploadedFiles, removeFromUploadedFiles,
} from './files';
import { runBot, stopBot } from './run';
import {
    getVariables, setVariables, createVariable, updateVariable, deleteVariable,
} from './variables';
import {
    getAllVdi, setAllVdi, updateVdi, createVdi, deleteVdi,
} from './vdi';
import {
    getUsersForBotCreation,
    getUsersForBotUpdate,
    setUsersForBotCreation,
    setUsersForBotUpdate,
    getAdminBotList,
    setAdminBotList,
    getUserBotStatuses,
    setUserBotStatuses,
    getBotsWithStatus,
    setBots,
    getBot,
    setBot,
    updateBot,
    updateBotVdi,
    updateBotTime,
    updateBotUsers,
    createBot,
    deleteBot,
    getBotStatistics,
    setBotStatistics,
} from './bot';

export {
    getFiles, uploadFile, deleteFile, setUploadedFiles, removeFromUploadedFiles,
};
export { runBot, stopBot };
export {
    getVariables, setVariables, createVariable, updateVariable, deleteVariable,
};
export {
    getAllVdi, setAllVdi, updateVdi, createVdi, deleteVdi,
};
export {
    getUsersForBotCreation,
    getUsersForBotUpdate,
    setUsersForBotCreation,
    setUsersForBotUpdate,
    getAdminBotList,
    setAdminBotList,
    getUserBotStatuses,
    setUserBotStatuses,
    getBotsWithStatus,
    setBots,
    getBot,
    setBot,
    updateBot,
    updateBotVdi,
    updateBotTime,
    updateBotUsers,
    createBot,
    deleteBot,
    getBotStatistics,
    setBotStatistics,
};
