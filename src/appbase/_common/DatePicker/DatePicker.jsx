import { Typography } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import React from 'react';


const DatePicker = ({ ...restProps }) => (
    <KeyboardDatePicker
        variant="inline"
        disableToolbar
        invalidDateMessage={(
            <Typography
                color="error"
                variant="body2"
                component="span"
            >
                    invalid date format
            </Typography>
        )}
        minDateMessage={null}
        {...restProps}
    />
);

export default DatePicker;
