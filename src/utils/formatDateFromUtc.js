import moment from 'moment';
import { dateFormat, timeFormat } from '../config';

const formatDateFromUtc = (dateString, format) => {
    const dateMoment = moment(dateString);
    if (dateString && dateMoment.isValid()) {
        const timezone = dateMoment.format('Z');
        const date = dateMoment.format(format || `${dateFormat} ${timeFormat}`);
        return {
            date,
            timezone,
        };
    }
    return { date: dateString };
};

export default formatDateFromUtc;
