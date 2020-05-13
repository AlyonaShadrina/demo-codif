import Cookies from 'js-cookie';
import React from 'react';
import { Redirect, Route } from 'react-router';

import Loading from '../../appbase/_common/Loading';
import { PROJECT_NAME } from '../../config';
import { paths } from '../../dictionary';
import withAuth from '../../hocs/withAuth';


const PrivateRoute = withAuth(({ component: Component, isLoggedIn, ...rest }) => {
    const cookie = Cookies.get(PROJECT_NAME)

    if (!cookie) {
        return <Redirect {...rest} to={paths.login} />
    } else if (!isLoggedIn) {
        return <Loading />
    } else {
        return (
            <Route {...rest} render={(props) => (
                <Component {...props} />
            )}
            />
        )
    }
});

export default PrivateRoute;