export const createVdiFields = [
    'app_name',
    'app_common_name',
    'user_name',
    'app_credentials_password',
    'vdi',
    'vdi_common_name',
];

const validate = (values) => {
    const errors = {};

    createVdiFields.map((field) => {
        if (!values[field]) {
            errors[field] = 'required';
        }
    });

    return errors;
};

export default validate;
