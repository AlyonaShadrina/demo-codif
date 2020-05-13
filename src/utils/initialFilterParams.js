import moment from 'moment';
import { dateFormat } from '../config';


export const created_at = {
    start_date: '2019-06-01',
    end_date: moment().add(1, 'days').format(dateFormat),
};

const initialFilterParams = (timezone) => ({
    'page[number]': 1,
    'page[size]': 20,
    'filter[created_at][start_datetime]': `${created_at.start_date}T00:00:00${timezone}`,
    'filter[created_at][end_datetime]': `${created_at.end_date}T00:00:00${timezone}`,
});

export default initialFilterParams;
