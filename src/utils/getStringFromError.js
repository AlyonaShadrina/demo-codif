import { notifications } from '../dictionary';


const getStringFromError = (errorObj) => {
    const { response } = errorObj;

    if (response && response.data) {
        const { error, errors } = errorObj.response.data;

        if (error && error.message) {
            return error.message;
        }

        if (errors) {
            const errorMessage = Object.keys(errors).map(
                (key) => errors[key].map((message) => message),
            );

            return errorMessage.join(' ');
        }
    }

    return notifications.errors.default;
};

export default getStringFromError;
