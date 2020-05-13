const duckBranch = 'bots';
const mainDict = 'bots';

export const botsRoot = (state) => state[duckBranch];
export const bots = (state) => state[duckBranch][mainDict].data;
export const bot = (id) => (state) => state[duckBranch][mainDict].data[id];
export const botsMeta = (state) => state[duckBranch][mainDict].meta;

export const userStatuses = (state) => state[duckBranch].userStatuses;
export const botLoading = (state) => state[duckBranch].loading;
export const vdi = (state) => state[duckBranch].vdi;
export const usersForBotUpdate = (state) => state[duckBranch].usersForBotUpdate;
