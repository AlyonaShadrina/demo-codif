import { Avatar } from '@material-ui/core';
import React from 'react';
import { BASE_API_URI } from '../../../config';


const AvatarCircle = ({ user: { first_name, last_name, avatar }, className, temporaryAvatar }) => {
    let avatarToShow;
    if (temporaryAvatar) {
        avatarToShow = temporaryAvatar;
    } else {
        avatarToShow = avatar ? BASE_API_URI + avatar : null;
    }

    return (
        <Avatar
            alt={`${first_name} ${last_name}`}
            src={avatarToShow}
            className={className}
        >
            {(first_name[0] + last_name[0]).toUpperCase()}
        </Avatar>
    );
};

export default AvatarCircle;
