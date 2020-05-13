const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'required';
    }
    if (!values.type_id) {
        errors.type_id = 'required';
    }

    return errors;
};

export default validate;
