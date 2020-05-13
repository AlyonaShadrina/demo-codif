import { Typography } from '@material-ui/core';
import React from 'react';

import HeadTag from '../appbase/_common/HeadTag';
import AdminBotListContainer from '../appbase/bots/containers/AdminBotListContainer';

const AdminBotList = () => (
    <>
        <HeadTag title="List of Bots"/>
        <Typography
            variant="h1"
            className="pageTitle"
            component="h1"
        >
            List of Bots
        </Typography>
        <AdminBotListContainer />
    </>
);

export default AdminBotList;