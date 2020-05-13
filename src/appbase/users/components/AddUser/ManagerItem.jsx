import { Avatar, Grid } from '@material-ui/core';
import React from 'react';


const ManagerItem = ({
    manager: { avatar, first_name, last_name },
}) => (
    <Grid
        container
        alignItems="center"
    >
        <Grid
            item
            xs={2}
        >
            <Avatar
                alt="Name LastName"
                src={avatar}
            >
                {(first_name[0] + last_name[0]).toUpperCase()}
            </Avatar>
        </Grid>
        <Grid
            item
            xs={9}
        >
            {`${first_name} ${last_name}`}
        </Grid>
    </Grid>
);

export default ManagerItem;
