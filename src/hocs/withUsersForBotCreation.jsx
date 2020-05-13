import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../appbase/bots/state/actions';
import * as botSelectors from '../appbase/bots/state/selectors';

const withUsersForBotCreation = WrappedComponent => props => {
    const dispatch = useDispatch();

    const users = useSelector(botSelectors.usersForBotUpdate);

    useEffect(() => {
        dispatch(actions.getUsersForBotUpdate({}));
    }, []);

    return (
        <WrappedComponent
            usersForBotCreation={users}
            {...props}
        />
    )
};

export default withUsersForBotCreation;