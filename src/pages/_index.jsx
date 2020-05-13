import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';

import Loading from "../appbase/_common/Loading";
import { paths } from '../dictionary';
import adminRoutes from './_routes/adminRoutes';
import commonRoutes from './_routes/commonRoutes';
import PrivateRoute from './_routes/PrivateRoute';
import RedirectToBots from './_routes/RedirectToBots';
import Hint from './Hint';

const Error = lazy(() => import('./Error'));
const Login = lazy(() => import('./Login'));
const LoginAdmin = lazy(() => import('./LoginAdmin'));


const Routes = () => (
    <Suspense fallback={<Loading/>}>
        <Switch>
            <Route
                exact
                path={paths.login}
                component={Login}
            />
            <Route
                exact
                path={paths.admin + paths.login}
                component={LoginAdmin}
            />
            <Route
                exact
                path={`${paths.error}/:status`}
                component={Error}
            />
            <PrivateRoute
                path="/hint"
                component={Hint}
            />
            <PrivateRoute
                exact
                from='/'
                component={RedirectToBots}
            />
            {adminRoutes.map((route, i) => (
                <PrivateRoute
                    key={i}
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                />
            ))}
            {commonRoutes.map((route, i) => (
                <PrivateRoute
                    key={i}
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                />
            ))}
        </Switch>
    </Suspense>
);

export default Routes;