import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ManagersUserList from '../components/UserListTable/ManagerRow/ManagersUserList';
import * as actions from '../state/actions';
import * as selectors from '../state/selectors';


const ManagersUserListContainer = ({ managerId, expandUsers }) => {
    const dispatch = useDispatch();

    const allUsers = useSelector(selectors.users);
    const { user_ids } = useSelector(selectors.user(managerId));

    useEffect(() => {
        if (expandUsers) {
            dispatch(actions.getUsersForManager(managerId));
        }
    }, [expandUsers]);

    if (!user_ids || !user_ids.length) {
        return null;
    }

    return (
        <ManagersUserList
            allUsers={allUsers}
            user_ids={user_ids}
        />
    );
};

export default ManagersUserListContainer;
