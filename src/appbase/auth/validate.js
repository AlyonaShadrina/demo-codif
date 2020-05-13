const emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const validate = (values) => {
    const errors = {};

    // login
    if (!values.username) {
        errors.username = 'required';
    } else if (!values.username.match(emailRegExp)) {
        errors.username = "doesn't look like email";
    }
    if (!values.password) {
        errors.password = 'required';
    } else if (values.password.length < 6) {
        errors.password = 'must be 6 characters or more';
    }

    // contact
    if (!values.first_name) {
        errors.first_name = 'required';
    }
    if (!values.last_name) {
        errors.last_name = 'required';
    }
    if (!values.email) {
        errors.email = 'required';
    } else if (!values.email.match(emailRegExp)) {
        errors.email = "doesn't look like email";
    }
    if (!values.subject) {
        errors.subject = 'required';
    }
    if (!values.message) {
        errors.message = 'required';
    }
    return errors;
};

export default validate;
