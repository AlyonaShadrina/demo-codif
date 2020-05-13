import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

import colors from '../../../../styles/colors';
import { navigationByRoles } from '../../../../dictionary';


const useStyles = makeStyles((theme) => ({
    navList: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
    },
    navListItem: {
        color: theme.palette.text.primary,
        marginRight: 10,
        [theme.breakpoints.up('sm')]: {
            marginRight: 50,
        },
    },
    isSelectedNavItem: {
        position: 'relative',
        '&::before': {
            content: "' '",
            width: '100%',
            height: 2,
            backgroundColor: colors.primary,
            display: 'inline-block',
            position: 'absolute',
            bottom: -10,
        },
    },
}));

const Navigation = ({ role, profileId }) => {
    const classes = useStyles();

    const navigation = navigationByRoles[role] || navigationByRoles.user;
    return (
        <Grid
            container
            component="ul"
            className={classes.navList}
        >
            {
                navigation.map((nav, i) => (
                    <Typography
                        component="li"
                        variant="body2"
                        key={i}
                    >
                        <NavLink
                            exact
                            to={typeof nav.link === 'string' ? nav.link : nav.link(profileId)}
                            className={classes.navListItem}
                            activeClassName={classes.isSelectedNavItem}
                        >
                            {nav.text}
                        </NavLink>
                    </Typography>
                ))
            }
        </Grid>
    );
};

export default Navigation;
