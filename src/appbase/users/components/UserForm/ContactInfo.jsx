import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Field } from 'redux-form';

import AvatarCircle from '../../../_common/AvatarCircle';
import RenderField from '../../../_common/RenderTextFieldBordered';
import ManageAvatar from './ManageAvatar';


const useStyles = makeStyles(() => ({
    avatar: {
        width: 80,
        height: 80,
    },
}));

const ContactInfo = ({
    user, isProfilePage, change, temporaryAvatar, setTemporaryAvatar,
}) => {
    const classes = useStyles();

    return (
        <Grid
            container
            spacing={2}
            alignItems="center"
        >
            <Grid item xs={12}>
                <Typography
                    variant="caption"
                    component="h2"
                >
                    Contact info
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <AvatarCircle
                    user={user}
                    className={classes.avatar}
                    temporaryAvatar={temporaryAvatar}
                />
            </Grid>
            <Grid item xs={11}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Field
                            component={RenderField}
                            name="first_name"
                            label="First name"
                            marginBottom={2}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Field
                            component={RenderField}
                            name="last_name"
                            label="Last name"
                            marginBottom={2}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Field
                            component={RenderField}
                            name="email"
                            label="Email"
                            marginBottom={2}
                        />
                    </Grid>
                    {isProfilePage && (
                        <ManageAvatar
                            change={change}
                            setTemporaryAvatar={setTemporaryAvatar}
                        />
                    )}
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Field
                    component={RenderField}
                    name="country"
                    label="Country"
                    marginBottom={2}
                />
            </Grid>
            <Grid item xs={4}>
                <Field
                    component={RenderField}
                    name="phone"
                    label="Phone"
                    marginBottom={2}
                />
            </Grid>
        </Grid>
    );
};

export default ContactInfo;
