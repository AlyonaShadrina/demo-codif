import React from 'react';
import { withRouter } from 'react-router';

import BackButton from '../appbase/_common/BackButton';
import HeadTag from '../appbase/_common/HeadTag';
import VdiListContainer from '../appbase/bots/containers/VdiListContainer';
import { paths } from '../dictionary';


const VDIPage = ({ match }) => {
    const { id, userId } = match.params;

    return (
        <>
            <HeadTag title="Manage VDI"/>
            <BackButton path={`${paths.users}/${userId}${paths.bots}/${id}`} title="Bot settings"/>
            <VdiListContainer />
        </>
    );
};

export default withRouter(VDIPage);