import { Typography, Grid } from '@material-ui/core';
import moment from 'moment';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { profile } from '../../profile/state/selectors';
import { dateFormat, timeFormat } from '../../../config';
import TimeSettings from '../components/TimeSettings';


const TimeSettingsContainer = ({
    estimated, bot, botStatusNotEditable, change,
}) => {
    const { timezone } = useSelector(profile);

    const { start_datetime } = bot;

    const botHasStartDatetime = start_datetime && start_datetime.length > 0;

    const [startNow, setStartNow] = useState(!botHasStartDatetime);
    const [date, setDate] = useState(botHasStartDatetime
        ? moment(start_datetime.split('+')[0]).format(dateFormat)
        : moment().format(dateFormat));
    const [time, setTime] = useState(botHasStartDatetime
        ? moment(start_datetime.split('+')[0]).format(timeFormat)
        : moment().format(timeFormat));


    // watch fields changing and update hidden field
    const handleDateChange = (value) => setDate(value ? value.format(dateFormat) : '');
    const handleTimeChange = (value) => setTime(value ? value.format(timeFormat) : '');

    // watch flag 'start now' changes: if start now - send null, else - send values
    const handleStartNowChange = (bool) => {
        setStartNow(bool);
        if (bool) {
            change('start_datetime', null);
        } else {
            change('start_datetime', `${date}T${time}${timezone}`);
        }
    };

    // update 'start_datetime' onBlur, onClose, on checkbox change
    const handleBlur = () => {
        change('start_datetime', `${date}T${time}${timezone}`);
    };

    if (botStatusNotEditable && start_datetime) {
        return (
            <>
                <Typography
                    variant="subtitle1"
                    display="block"
                >
                    {`Timezone: ${timezone}`}
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Typography
                            variant="overline"
                            display="block"
                        >
                            Date
                        </Typography>
                        <Typography
                            // variant="overline"
                            display="block"
                        >
                            {start_datetime.match(/(.*)T/)[1]}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography
                            variant="overline"
                            display="block"
                        >
                            Time
                        </Typography>
                        <Typography
                            // variant="overline"
                            display="block"
                        >
                            {start_datetime.match(/T(.*)\+/)[1]}
                        </Typography>
                    </Grid>
                </Grid>
            </>
        );
    }

    if (!botStatusNotEditable) {
        return (
            <>
                <Typography
                    variant="subtitle1"
                    display="block"
                >
                    {`Timezone: ${timezone}`}
                </Typography>
                <TimeSettings
                    estimated={estimated}
                    date={date}
                    time={time}
                    handleDateChange={handleDateChange}
                    handleTimeChange={handleTimeChange}
                    handleBlur={handleBlur}
                    setStartNow={handleStartNowChange}
                    startNow={startNow}
                    timezone={timezone}
                />
            </>
        );
    }

    return null;
};

export default TimeSettingsContainer;
