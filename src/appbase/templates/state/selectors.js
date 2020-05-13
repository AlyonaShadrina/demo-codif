const duckBranch = 'templates';

export const templateList = (state) => state[duckBranch].templates.templates;
export const templatesIsLoading = (state) => state[duckBranch].templates.isLoading;
export const variableList = (state) => state[duckBranch].variables;

export const documents = (state) => state[duckBranch].documents;
