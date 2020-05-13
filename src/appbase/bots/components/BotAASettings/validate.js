const validate = (values) => {
    const errors = {};

    if (!values.aa_base_file_path) {
        errors.aa_base_file_path = 'required';
    }

    if (!values.aa_bot_name) {
        errors.aa_bot_name = 'required';
    }

    return errors;
};

export default validate;
