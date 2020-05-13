import {
    Box, Grid, makeStyles, Typography,
} from '@material-ui/core';
import React from 'react';

import { paths } from '../../../../dictionary';
import cropText from '../../../../utils/cropText';
import AvatarCircle from '../../../_common/AvatarCircle';
import RouterStyledLink from '../../../_common/RouterStyledLink';


const useStyles = makeStyles((theme) => ({
    name: {
        '&:not(:hover)': {
            color: theme.palette.text.primary,
        },
    },
}));

const BasicInfo = ({ user }) => {
    const classes = useStyles();

    const {
        first_name, last_name, email, id,
    } = user;

    return (
        <Grid container>
            <Box pr={1}>
                <AvatarCircle user={user} />
            </Box>
            <Grid item>
                <Typography>
                    <RouterStyledLink
                        to={`${paths.users}/${id}${paths.bots}`}
                        className={classes.name}
                    >
                        {cropText(`${first_name} ${last_name}`, 60)}
                    </RouterStyledLink>
                </Typography>
                <Typography
                    variant="body2"
                    color="textSecondary"
                >
                    {email}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default BasicInfo;
