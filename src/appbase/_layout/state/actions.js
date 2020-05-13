import * as types from './types';


export const closeSnackbar = (key) => ({
    type: types.CLOSE_SNACKBAR,
    dismissAll: !key,
    key,
});

export const removeSnackbar = (key) => ({
    type: types.REMOVE_SNACKBAR,
    key,
});

export const enqueueSnackbar = (notification) => {
    const key = notification.options && notification.options.key;

    return {
        type: types.ENQUEUE_SNACKBAR,
        notification: {
            ...notification,
            key: key || new Date().getTime() + Math.random(),
        },
    };
};
