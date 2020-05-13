import React, { lazy } from 'react';
import Layout from '../../appbase/_layout';
import { paths } from '../../dictionary';

const AdminBotList = lazy(() => import('../AdminBotList'));
const BotCreationPage = lazy(() => import('../BotCreationPage'));
const UserList = lazy(() => import('../UserList'));
const Logs = lazy(() => import('../Logs'));


const adminRoutes = [
    {
        exact: true,
        path: paths.admin + paths.bots,
        component: () => <Layout><AdminBotList /></Layout>,
    },
    {
        exact: true,
        path: paths.admin + paths.bots + paths.create,
        component: () => <Layout><BotCreationPage /></Layout>,
    },
    {
        exact: true,
        path: paths.admin + paths.users,
        component: () => <Layout><UserList role="user" /></Layout>,
    },
    {
        exact: true,
        path: paths.admin + paths.managers,
        component: () => <Layout><UserList role="manager" /></Layout>,
    },
    {
        exact: true,
        path: paths.admin + paths.logs,
        component: () => <Layout><Logs /></Layout>,
    },
];

export default adminRoutes;