import { Typography, Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';

import Loading from '../../_common/Loading';
import * as selectors from '../../profile/state/selectors';
import * as profileActions from '../../profile/state/actions';
import UserForm from '../components/UserForm';
import * as userActions from '../state/actions';
import * as userSelectors from '../state/selectors';


const UserContainer = ({ match }) => {
    const { userId } = match ? match.params : null;

    const dispatch = useDispatch();

    const profile = useSelector(selectors.profile);
    const user = useSelector(userSelectors.user(userId)) || {};

    const { role } = profile;

    const userToShow = userId ? user : profile;

    useEffect(() => {
        if (userId && (role !== 'user')) {
            dispatch(userActions.getUser(userId));
        }
    }, []);


    if (Object.keys(userToShow).length === 0) {
        return <Loading />;
    }

    const updateProfile = (values) => {
        const valuesToSend = { ...values };

        if (valuesToSend.email === userToShow.email) {
            delete valuesToSend.email;
        }

        dispatch(profileActions.updateProfile(valuesToSend));
    };

    const updateUser = (values) => {
        const isUser = userToShow.role === 'user';

        const valuesToSend = { ...values };

        if (valuesToSend.email === userToShow.email) {
            delete valuesToSend.email;
        }

        if (isUser) {
            dispatch(userActions.updateUser({
                values: {
                    ...valuesToSend,
                    manager_id: user.manager.id,
                },
                user,
            }));
        } else {
            dispatch(userActions.updateUser({ valuesToSend, user }));
        }
    };

    const {
        first_name, last_name, avatar, email, country, phone,
    } = userToShow;

    return (
        <>
            <Typography
                variant="h1"
                className="pageTitle"
                component="h1"
            >
                {userId ? `${first_name} ${last_name} profile` : 'Your profile'}
            </Typography>
            <Paper>
                <UserForm
                    initialValues={{
                        first_name,
                        last_name,
                        avatar,
                        email,
                        country,
                        phone,
                    }}
                    updateProfile={userId ? updateUser : updateProfile}
                    isProfilePage={!userId}
                    user={userToShow}
                />
            </Paper>

        </>
    );
};

export default withRouter(UserContainer);
