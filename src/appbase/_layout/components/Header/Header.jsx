import React from 'react';
import { Grid, Container, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import * as selectors from '../../../profile/state/selectors';
import { paths } from '../../../../dictionary';
import Navigation from './Navigation';
import Profile from './Profile';
import logo from '../../../../assets/logo.svg';


const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: theme.palette.common.white,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
    },
    header: {
        minHeight: 80,
        [theme.breakpoints.down('sm')]: {
            paddingTop: 10,
            paddingBottom: 10,
        },
    },
    logo: {
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: 10,
            marginBottom: 10,
        },
    },
}));


const Header = () => {
    const classes = useStyles();

    const profile = useSelector(selectors.profile);
    const { role, id } = profile;

    return (
        <div className={classes.background}>
            <Container>
                <Grid
                    container
                    component="header"
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    className={classes.header}
                >
                    <Grid item component="nav" xs={12} md={5}>
                        <Navigation role={role} profileId={id} />
                    </Grid>
                    <Grid item xs={12} md={2} className={classes.logo}>
                        <Link to={`${paths.users}/${id}${paths.bots}`}>
                            <img src={logo} alt="Logo" />
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Profile profile={profile} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Header;
