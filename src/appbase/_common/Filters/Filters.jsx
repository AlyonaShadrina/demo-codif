import { Grid, Typography, Link } from '@material-ui/core';
import React from 'react';

import DatePicker from './DatePicker';
import SelectFilter from './SelectFilter';


const Filters = ({ filters, clearFilters, timezone }) => (
    <Grid container spacing={5}>
        <Grid item xs={12}>
            <Grid container>
                <Grid item xs={6}>
                    <Typography variant="caption">Filters</Typography>
                </Grid>
                {clearFilters && (
                    <Grid item xs={6} style={{ textAlign: 'right' }}>
                        <Link onClick={clearFilters}>Clear filters</Link>
                    </Grid>
                )}
            </Grid>
        </Grid>


        {
            filters.map((filter, i) => {
                const { type, label, ...restProps } = filter;
                switch (type) {
                case 'date':
                    return (
                        <Grid key={i} item xs={12} md={6} lg={3}>
                            <Typography variant="overline" component="div">
                                {label}
                            </Typography>
                            <DatePicker {...restProps} timezone={timezone}/>
                        </Grid>
                    );
                case 'select':
                    return (
                        <Grid key={i} item xs={12} md={6} lg={3}>
                            <Typography variant="overline" component="div">
                                {label}
                            </Typography>
                            <SelectFilter {...restProps} />
                        </Grid>
                    );
                default:
                    return <Grid key={i} item xs={12} md={6} lg={3} />;
                }
            })
        }
    </Grid>
);

export default Filters;
