const duckBranch = 'users';
const mainDict = 'allUserList';

export const users = (state) => state[duckBranch][mainDict];
export const user = (id) => (state) => state[duckBranch][mainDict][id];

export const userRole = (state) => state[duckBranch].user.idList;
export const adminRole = (state) => state[duckBranch].admin.idList;
export const managerRole = (state) => state[duckBranch].manager.idList;

export const userRoleMeta = (state) => state[duckBranch].user.meta;
export const adminRoleMeta = (state) => state[duckBranch].admin.meta;
export const managerRoleMeta = (state) => state[duckBranch].manager.meta;

export const managersForUserCreation = (state) => state[duckBranch].manager.idListForCreation;
