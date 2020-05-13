import React from 'react';

import HeadTag from '../appbase/_common/HeadTag';
import UserContainer from '../appbase/users/containers/UserContainer';

const Profile = () => (
    <>
        <HeadTag title="Profile" />
        <UserContainer />
    </>
);

export default Profile;
