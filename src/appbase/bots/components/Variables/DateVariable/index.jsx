import React from 'react';
import { Field } from 'redux-form';

import Calendar from '../../../../../assets/icons/Calendar';
import { dateFormat } from '../../../../../config';
import DatePicker from '../../../../_common/DatePicker';


const DateVariable = ({
    date,
    botStatusNotEditable,
    handleDateChange,
}) => (
    <>
        <Field
            name="values"
            component="input"
            type="hidden"
            value={date}
        />
        <DatePicker
            disabled={botStatusNotEditable}
            value={date}
            onChange={handleDateChange}
            format={dateFormat}
            placeholder={dateFormat}
            keyboardIcon={<Calendar fill={botStatusNotEditable ? 'lightgrey' : 'primary'} />}
            InputProps={{
                disableUnderline: true,
            }}
        />
    </>
);

export default DateVariable;
