const validate = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = 'required';
    }

    if (!values.password) {
        errors.password = 'required';
    } else if (values.password.length < 6) {
        errors.password = 'must be 6 characters or more';
    }
    return errors;
};

export default validate;
