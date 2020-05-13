import moment from 'moment';

const validate = (values) => {
    const errors = {};

    if (!values.label) {
        errors.label = 'required';
    }

    if (values.type_id === 3 && !moment(values.values).isValid()) {
        errors.values = 'wrong value';
    }

    return errors;
};

export default validate;
