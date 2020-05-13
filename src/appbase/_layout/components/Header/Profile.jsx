import { Grid, makeStyles } from '@material-ui/core';
import Badge from '@material-ui/core/Badge/Badge';
import React, { useState } from 'react';

import ChevronDown from '../../../../assets/icons/ChevronDown';
import Notification from '../../../../assets/icons/Notification';
import AvatarCircle from '../../../_common/AvatarCircle';
import AddBot from '../../../bots/components/AddBot';
import MenuDropdown from './MenuDropdown';


const useStyles = makeStyles(() => ({
    addBtn: {
        textAlign: 'right',
    },
    notification: {
        textAlign: 'right',
    },
    badge: {
        marginRight: 30,
    },
    container: {
        cursor: 'pointer',
    },
    avatar: {
        width: 40,
        marginRight: 10,
    },
}));

const Profile = ({ profile }) => {
    const classes = useStyles();

    const { role } = profile;

    const isUser = role === 'user';

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Grid container justify="flex-end">
            <Grid item xs={6} className={classes.addBtn}>
                {!isUser && <AddBot />}
            </Grid>
            <Grid item xs={6}>
                <Grid
                    container
                    alignItems="center"
                    justify="flex-end"
                    className={classes.notification}
                >
                    <Grid item xs={3} md={6}>
                        <Badge
                            badgeContent={4}
                            color="error"
                            className={classes.badge}
                        >
                            <Notification title={`${4} notifications`} />
                        </Badge>
                    </Grid>
                    <Grid item xs={6} md={5}>
                        <Grid
                            container
                            justify="flex-end"
                            alignItems="center"
                            onClick={handleClick}
                            aria-controls="customized-menu"
                            aria-haspopup="true"
                            className={classes.container}
                        >
                            <AvatarCircle user={profile} className={classes.avatar} />
                            <ChevronDown />
                        </Grid>
                        <MenuDropdown handleClose={handleClose} anchorEl={anchorEl} role={role} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Profile;
