import { maxBotNameLength } from '../../../../config';

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'required'
    } else if (values.name.length > maxBotNameLength) {
        errors.name = 'max length of BOT name must be under 300 characters'
    }

    if (!values.user_ids || values.user_ids.length === 0) {
        errors.user_ids = 'required'
    }

    return errors
};

export default validate;