import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { profile } from '../../profile/state/selectors';
import BotCreationForm from '../components/BotCreationForm';
import * as actions from '../state/actions';
import * as selectors from '../state/selectors';


const BotCreationContainer = ({ history }) => {
    const dispatch = useDispatch();

    const { role } = useSelector(profile);
    const isUser = role === 'user';

    const formOptions = (usersArr) => {
        if (Array.isArray(usersArr)) {
            return usersArr.map((user) => ({
                value: user.id,
                label: <div>{`${user.first_name} ${user.last_name}`}</div>,
            }));
        }
        return Object.keys(usersArr).map((user) => ({
            value: usersArr[user].id,
            label: <div>{`${usersArr[user].first_name} ${usersArr[user].last_name}`}</div>,
        }));
    };

    useEffect(() => {
        dispatch(actions.getUsersForBotUpdate({}));
    }, []);

    const users = useSelector(selectors.usersForBotUpdate);

    const createBot = (values) => {
        dispatch(actions.createBot({ values, history }));
    };

    if (isUser) {
        return null;
    }

    return (
        <BotCreationForm createBot={createBot} userList={formOptions(users)} />
    );
};

export default withRouter(BotCreationContainer);
