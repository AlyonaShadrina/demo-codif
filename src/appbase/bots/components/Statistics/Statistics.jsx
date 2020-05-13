import { Grid } from '@material-ui/core';
import React from 'react';

import Sort from './Sort';
import StatisticCard from './StatisticCard';


const Statistics = ({ data, period, setPeriod }) => (
    <Grid container spacing={5}>
        <Sort period={period} setPeriod={setPeriod}/>
        {
            Object.keys(data).map((key, i) => (
                <StatisticCard
                    key={i}
                    info={data[key]}
                    infoKey={key}
                    period={period}
                />
            ))
        }
    </Grid>
);

export default Statistics;