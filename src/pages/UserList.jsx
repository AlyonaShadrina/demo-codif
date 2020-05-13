import { Typography } from '@material-ui/core';
import React from 'react';

import HeadTag from '../appbase/_common/HeadTag';
import UserListContainer from '../appbase/users/containers/UserListContainer';

const UserList = ({ role }) => (
    <>
        <HeadTag title="Users" />
        <Typography
            variant="h1"
            className="pageTitle"
            component="h1"
        >
            {`List of ${role}s`}
        </Typography>
        <UserListContainer role={role} />
    </>
);

export default UserList;
