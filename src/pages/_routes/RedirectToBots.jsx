import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import Layout from '../../appbase/_layout';
import { profile } from '../../appbase/profile/state/selectors';
import { paths } from '../../dictionary';


const RedirectToBots = () => {
    const { id } = useSelector(profile);

    return (
        <Layout>
            <Redirect to={`${paths.users}/${id}${paths.bots}`} />
        </Layout>
    )
};

export default RedirectToBots;