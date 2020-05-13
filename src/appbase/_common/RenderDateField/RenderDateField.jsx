import { KeyboardDatePicker } from '@material-ui/pickers';
import React from 'react';
import Calendar from '../../../assets/icons/Calendar';


const RenderDateField = ({ input: { onBlur, value, ...inputProps }, ...others }) => {
    const onChange = (date) => {
        Date.parse(date) ? inputProps.onChange(date.toISOString()) : inputProps.onChange(null);
    };

    return (
        <KeyboardDatePicker
            {...inputProps}
            {...others}
            format="DD/MM/YYYY"
            value={value ? new Date(value) : null}
            // disabled={submitting}
            onBlur={() => onBlur(value ? new Date(value).toISOString() : null)}
            // error={error && touched}
            onChange={onChange}
            keyboardIcon={<Calendar />}
            variant="inline"
            disableToolbar
            InputProps={{
                disableUnderline: true,
                className: value ? 'notEmpty' : '',
            }}
        />
    );
};

export default RenderDateField;
