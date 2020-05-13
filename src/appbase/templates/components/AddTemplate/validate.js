const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'required';
    }

    return errors;
};

export default validate;
