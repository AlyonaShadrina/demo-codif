import { KeyboardDatePicker } from '@material-ui/pickers';
import React from 'react';

import Calendar from '../../../assets/icons/Calendar';
import { dateFormat } from '../../../config';


const DatePicker = ({
    makeRequest, value, filterValue, timezone,
}) => {
    const onChange = (date) => {
        if (date && date.isValid()) {
            makeRequest({ [filterValue]: date.format(`${dateFormat}T00:00:00${timezone}`) });
        }
    };

    return (
        <KeyboardDatePicker
            format={dateFormat}
            value={value}
            onChange={onChange}
            keyboardIcon={<Calendar />}
            variant="inline"
            disableToolbar
            InputProps={{
                disableUnderline: true,
                className: value ? 'notEmpty' : '',
            }}
            style={{ width: '100%' }}
        />
    );
};

export default DatePicker;
