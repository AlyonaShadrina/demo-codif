import moment from 'moment';
import { maxBotNameLength } from '../../../../config';

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = "name field can't be empty"
    } else if (values.name.length > maxBotNameLength) {
        errors.name = 'max length of BOT name must be under 300 characters'
    }

    if (values.start_datetime && !moment().isBefore(values.start_datetime)) {
        errors.start_datetime = 'Date and time must be after current moment'
    }


    return errors
};

export default validate;