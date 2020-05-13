import React, { lazy } from 'react';
import Layout from '../../appbase/_layout';
import { paths } from '../../dictionary';

const BotPage = lazy(() => import('../BotPage'));
const VDIPage = lazy(() => import('../VDIPage'));
const BotList = lazy(() => import('../BotList'));
const Workflows = lazy(() => import('../Workflows'));
const Document = lazy(() => import('../Document'));
const Profile = lazy(() => import('../Profile'));
const DataExtractions = lazy(() => import('../DataExtractions'));
const Template = lazy(() => import('../Template'));
const UploadFile = lazy(() => import('../UploadFile'));


const commonRoutes = [
    {
        exact: true,
        path: paths.templates,
        component: () => <Layout><DataExtractions /></Layout>,
    },
    {
        exact: true,
        path: `${paths.templates}/:id`,
        component: () => <Layout><Template /></Layout>,
    },
    {
        exact: true,
        path: `${paths.templates}/:id/:action${paths.templatesUpload}`,
        component: () => <Layout><UploadFile /></Layout>,
    },
    {
        exact: true,
        path: `${paths.templates}/:templateId/:action/:documentId`,
        component: () => <Layout fullWidth><Document /></Layout>,
    },
    {
        exact: true,
        path: `${paths.users}/:userId${paths.bots}`,
        component: () => <Layout><BotList /></Layout>,
    },
    {
        exact: true,
        path: paths.workflows,
        component: () => <Layout><Workflows /></Layout>,
    },
    {
        exact: true,
        path: `${paths.users}/:userId${paths.bots}/:id`,
        component: () => <Layout><BotPage /></Layout>,
    },
    {
        exact: true,
        path: `${paths.users}/:userId${paths.bots}/:id${paths.botsVdi}`,
        component: () => <Layout><VDIPage /></Layout>,
    },
    {
        exact: true,
        path: `${paths.users}/:userId${paths.profile}`,
        component: () => <Layout><Profile /></Layout>,
    },
    {
        exact: true,
        path: paths.profile,
        component: () => <Layout><Profile /></Layout>,
    },
];


export default commonRoutes;