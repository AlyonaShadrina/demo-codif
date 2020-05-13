import {
    Checkbox, FormControlLabel, Grid, makeStyles, Typography, Box,
} from '@material-ui/core';
import { KeyboardTimePicker } from '@material-ui/pickers';
import moment from 'moment';
import React from 'react';
import { Field } from 'redux-form';

import Calendar from '../../../../assets/icons/Calendar';
import Clock from '../../../../assets/icons/Clock';
import { dateFormat, timeFormat, timeFormatToDisplay } from '../../../../config';
import { placeholders } from '../../../../dictionary';
import DatePicker from '../../../_common/DatePicker';


const useStyles = makeStyles(() => ({
    estimatedTime: {
        paddingTop: 11,
    },
    fieldContainer: {
        position: 'relative',
        paddingBottom: 25,
        '& .MuiFormHelperText-root': {
            position: 'absolute',
            top: 40,
        },
    },
}));

const renderHiddenInput = ({ input, meta: { error } }) => (
    <>
        <input
            {...input}
            type="hidden"
        />
        <Typography
            variant="subtitle1"
            color={!error ? 'textSecondary' : 'error'}
        >
            Date and time must be after current moment
        </Typography>
    </>
);

const TimeSettings = ({
    estimated,
    date,
    time,
    handleDateChange,
    handleTimeChange,
    handleBlur,
    setStartNow,
    startNow,
}) => {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={4} alignItems="flex-end">
                <Grid item xs={12} md={4}>
                    <Typography
                        variant="overline"
                        display="block"
                    >
                        Select date
                    </Typography>
                    <DatePicker
                        disabled={startNow}
                        value={date}
                        onChange={handleDateChange}
                        minDate={new Date()}
                        format={dateFormat}
                        keyboardIcon={<Calendar fill="lightgrey" style={startNow ? { opacity: 0.5 } : null} />}
                        // onClose={handleDateChange}
                        className={classes.fieldContainer}
                        onClose={handleBlur}
                        InputProps={{
                            disableUnderline: true,
                            className: date && !startNow ? 'notEmpty' : '',
                            onBlur: handleBlur,
                        }}
                        placeholder={dateFormat}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography
                        variant="overline"
                        display="block"
                    >
                        Select time
                    </Typography>
                    <KeyboardTimePicker
                        disabled={startNow}
                        ampm={false}
                        variant="inline"
                        value={moment(time, timeFormat)}
                        onChange={handleTimeChange}
                        format={timeFormatToDisplay}
                        keyboardIcon={<Clock fill="lightgrey" style={startNow ? { opacity: 0.5 } : null} />}
                        // onClose={handleTimeChange}
                        onClose={handleBlur}
                        className={classes.fieldContainer}
                        placeholder={timeFormat}
                        InputProps={{
                            disableUnderline: true,
                            className: time && !startNow ? 'notEmpty' : '',
                            // onBlur: handleTimeChange
                            onBlur: handleBlur,
                        }}
                        invalidDateMessage={(
                            <Typography color="error" variant="body2">
                                invalid time format
                            </Typography>
                        )}
                        minDateMessage={null}
                    />
                </Grid>

                {/* <Grid */}
                {/*    item */}
                {/*    xs={12} */}
                {/*    md={4} */}
                {/* > */}
                {/*    <Typography */}
                {/*        variant="overline" */}
                {/*        display="block" */}
                {/*    > */}
                {/*        Estimated time */}
                {/*    </Typography> */}
                {/*    <Typography */}
                {/*        variant = "body2" */}
                {/*        display="block" */}
                {/*        className={classes.estimatedTime} */}
                {/*    > */}
                {/*        { estimated || '--' } */}
                {/*    </Typography> */}
                {/* </Grid> */}
                <Grid item xs={12} md={4}>
                    <FormControlLabel
                        className={classes.fieldContainer}

                        control={(
                            <Checkbox
                                checked={startNow}
                                onChange={(e) => setStartNow(e.target.checked)}
                                value="startNow"
                                color="primary"
                            />
                        )}
                        label="Start now"
                    />
                </Grid>
            </Grid>
            <Box pb={3}>
                <Field
                    name="start_datetime"
                    value={startNow ? null : `${date} ${time}`}
                    component={renderHiddenInput}
                    placeholder={placeholders.bot.start_datetime}
                    data-testid="start_datetime_input"
                />
            </Box>
        </>
    );
};

export default TimeSettings;
