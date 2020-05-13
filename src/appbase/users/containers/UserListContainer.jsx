import React, { useEffect, useState } from 'react';
import { Paper, Box, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import withAuth from '../../../hocs/withAuth';
import addRequestAndValueToFilter from '../../../utils/addRequestAndValueToFilter';
import initialFilterParams from '../../../utils/initialFilterParams';
import { objToQueryString, queryStringToObj } from '../../../utils/query';
import Filters from '../../_common/Filters';
import Loading from '../../_common/Loading';
import Search from '../../_common/Search';
import AddUser from '../components/AddUser';
import UserListTable from '../components/UserListTable';
import * as actions from '../state/actions';
import * as selectors from '../state/selectors';
import filters from '../filters';
import withManagersForUserCreation from "../../../hocs/withManagersForUserCreation";


/**
 * Component shows table with users info, filters and 'add' button.
 *
 * It has 'requestOptions' object in state that is formed from url query string.
 * 'requestOptions' object is updated by makeRequest({ 'filter[param]': value }) function.
 * When 'requestOptions' updated, useEffect runs getUsers,
 * that makes api request and updates query string in url.
 *
 * Before we pass array of filters to Filter component
 * we complete it with 'makeRequest' and 'value'.
 *
 * If we viewing users, we have additional requests and functions to make filter by manager_id work.
 *
 * @param {string} role - to fetch right users category (user or manager)
 * @param {Object} history - to update query string
 * @param {Object} location - to get query string
 * @param {Object} profile - to get timezone for query string
 */


const AddUserButton = withManagersForUserCreation(AddUser);
const AddManagerButton = AddUser;

const UserListContainer = ({
    role, location, history, profile,
}) => {
    const dispatch = useDispatch();

    const allUsers = useSelector(selectors.users);
    const managerUsersIds = useSelector(selectors.managerRole);
    const usersWithRoleIds = useSelector(selectors[`${role}Role`]);
    const usersWithRoleIdsMeta = useSelector(selectors[`${role}RoleMeta`]);
    const managerIds = useSelector(selectors.managersForUserCreation);

    const { timezone } = profile;
    const profileRole = profile.role;

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
        managerUsersIds: managerIds,
        allUsers,
    });

    // CRUD stuff

    const getUsers = (role) => {
        dispatch(actions.getUsers({ 'filter[role]': role, ...requestOptions }));
        history.push({
            pathname: path,
            search: `?${objToQueryString(requestOptions)}`,
        });
    };

    const getManagers = () => {
        dispatch(actions.getUsers({ 'filter[role]': 'manager' }));
    };

    const addUser = (values) => {
        dispatch(actions.addUser({ query: { 'filter[role]': role, ...requestOptions }, values }));
    };

    const deleteUser = (user) => {
        dispatch(actions.deleteUser({ query: { 'filter[role]': role, ...requestOptions }, user }));
    };

    const updateUser = (user, values) => {
        const isUser = user.role === 'user';

        if (isUser) {
            dispatch(actions.updateUser({
                values: {
                    ...values,
                    manager_id: user.manager.id,
                },
                user,
            }));
        } else {
            dispatch(actions.updateUser({ values, user }));
        }
    };

    useEffect(() => {
        if (role === 'user') {
            // we will need it to form filter by manager
            // getManagers();
            dispatch(actions.getManagersForUserCreation());
        }
    }, []);

    useEffect(() => {
        getUsers(role);
    }, [requestOptions]);

    if (!usersWithRoleIds) {
        return <Loading />;
    } else if (role === 'user' && !managerIds.length) {
        return <Loading />;
    }

    return (
        <Paper style={{ padding: 0 }}>
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
                {profileRole === 'admin' && (
                    <Box px={4} pt={3}>
                        <AddUser
                            role={role}
                            addUser={addUser}
                            initialValues={{ role }}
                            getManagers={getManagers}
                            managerUsersIds={managerUsersIds}
                            allUsers={allUsers}
                            managerIds={managerIds}
                        />
                    </Box>
                )}
            <UserListTable
                role={role}
                usersWithRoleIds={usersWithRoleIds}
                allUsers={allUsers}
                makeRequest={makeRequest}
                requestOptions={requestOptions}
                usersWithRoleIdsMeta={usersWithRoleIdsMeta}
                updateUser={updateUser}
                deleteUser={deleteUser}
                addUser={addUser}
            />
        </Paper>
    );
};

export default compose(
    withRouter,
    withAuth,
)(UserListContainer);
