import {
    makeStyles, Paper, Box, Divider,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import initialFilterParams from '../../../utils/initialFilterParams';
import withAuth from '../../../hocs/withAuth';
import withUsersForBotCreation from '../../../hocs/withUsersForBotCreation';
import addRequestAndValueToFilter from '../../../utils/addRequestAndValueToFilter';
import { objToQueryString, queryStringToObj } from '../../../utils/query';
import Filters from '../../_common/Filters';
import Loading from '../../_common/Loading';
import Search from '../../_common/Search';
import AddBot from '../components/AddBot';
import AdminBotList from '../components/AdminBotList';
import * as actions from '../state/actions';
import * as selectors from '../state/selectors';
import * as userActions from '../../users/state/actions';
import * as userSelectors from '../../users/state/selectors';
import filters from '../botFilters';


const useStyles = makeStyles(() => ({
    paper: {
        padding: 0,
    },
}));

/**
 * Component shows table with bots info, filters and add button.
 *
 * It has 'requestOptions' object in state that is formed from url query string.
 * 'requestOptions' object is updated by makeRequest({ 'filter[param]': value }) function.
 * When 'requestOptions' updated, useEffect runs getBotList,
 * that makes api request and updates query string in url.
 *
 * @param {Object} history - to update query string
 * @param {Object} location - to get query string
 * @param {Array} usersForBotCreation - to assign users inside table
 * @param {Object} profile - to get timezone for query string
 */

const AdminBotListContainer = ({
    history, location, usersForBotCreation, profile: { timezone, role },
}) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const allUsers = useSelector(userSelectors.users);
    const managerUsersIds = useSelector(userSelectors.managerRole);
    const ordinaryUsersIds = useSelector(userSelectors.userRole);
    const botList = useSelector(selectors.bots);
    const botListMeta = useSelector(selectors.botsMeta);
    const loading = useSelector(selectors.botLoading);

    // filters stuff

    const { search, path } = location;

    const initialParams = initialFilterParams(timezone);

    const [requestOptions, setRequestOptions] = useState({
        ...initialParams,
        ...queryStringToObj(search),
    });

    const makeRequest = (query) => {
        setRequestOptions((oldObj) => ({
            ...oldObj,
            ...query,
        }));
    };

    const clearFilters = () => {
        setRequestOptions(initialParams);
    };

    const searchUser = (text) => {
        makeRequest({ 'filter[search]': text });
    };

    const filtersWithValue = addRequestAndValueToFilter({
        filterArr: filters[role],
        makeRequest,
        requestOptions,
        managerUsersIds,
        ordinaryUsersIds,
        allUsers,
    });

    // CRUD stuff

    const getBotList = () => {
        dispatch(actions.getAdminBotList({ ...requestOptions }));
        history.push({
            pathname: path,
            search: `?${objToQueryString(requestOptions)}`,
        });
    };

    useEffect(() => {
        // we will need it to form filters
        if (role === 'admin') {
            dispatch(userActions.getUsers({ 'filter[role]': 'manager' }));
            // dispatch(userActions.getUsers({ 'filter[role]': 'manager,user' }));
        } else {
            dispatch(userActions.getUsers({ 'filter[role]': 'user' }));
        }
    }, []);

    useEffect(() => {
        getBotList();
    }, [requestOptions]);

    // if (!ordinaryUsersIds) {
    //     return <Loading />;
    // } else
        if (role === 'admin' && !managerUsersIds) {
        return <Loading />;
    }

    return (
        <Paper className={classes.paper}>
            <Box p={4}>
                <Filters
                    filters={filtersWithValue}
                    clearFilters={clearFilters}
                    timezone={timezone}
                />
            </Box>
            <Divider light variant="middle" />
            <Box px={4} py={3}>
                <Search
                    onChangeCallback={searchUser}
                    defaultValue={requestOptions['filter[search]']}
                />
            </Box>
            <Divider light variant="middle" />
            <Box px={4} pt={3}>
                <AddBot />
            </Box>
            <AdminBotList
                botList={botList}
                makeRequest={makeRequest}
                botListMeta={botListMeta}
                requestOptions={requestOptions}
                loading={loading}
                usersForBotCreation={usersForBotCreation}
            />
        </Paper>
    );
};

export default compose(
    withRouter,
    withUsersForBotCreation,
    withAuth,
)(AdminBotListContainer);
