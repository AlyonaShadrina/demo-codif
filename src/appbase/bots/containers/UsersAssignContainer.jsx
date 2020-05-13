import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxFormNames } from '../../../config';

import cropText from '../../../utils/cropText';
import Loading from '../../_common/Loading';
import UsersAssignForm from '../components/UsersAssignForm';
import * as actions from '../state/actions';


/**
 * Displays and updates bots' users.
 *
 * At some point it has to be used with 'withUsersForBotCreation' HOC that provides usersForBotCreation.
 *
 * @param {Object} match
 * @param {Object} history
 * @param {Object} bot
 * @param {Object} initialValues
 * @param {Object} usersForBotCreation
 * @param {boolean} botStatusNotEditable
 * @param {string} size
 */

const UsersAssignContainer = ({
    match, history, bot, botStatusNotEditable, size = 'large', initialValues, usersForBotCreation,
}) => {
    const dispatch = useDispatch();

    const botId = match.params.id || bot.id;
    const { userId } = match.params;

    const formOptions = (usersArr) => {
        if (Array.isArray(usersArr)) {
            return usersArr.map((user) => ({
                value: user.id,
                label: (
                    <Box>
                        {cropText(`${user.first_name} ${user.last_name}`, 20)}
                    </Box>
                ),
            }));
        }
        return Object.keys(usersArr).map((user) => ({
            value: usersArr[user].id,
            // label: <Chip>{usersArr[user].first_name + ' ' + usersArr[user].last_name}</Chip>,
            label: (
                <Box>
                    {cropText(`${usersArr[user].first_name} ${usersArr[user].last_name}`, 20)}
                </Box>
            ),
        }));
    };

    const users = usersForBotCreation;
    const [userList, setUserList] = useState(formOptions(bot.users || []));
    const formName = reduxFormNames.assignUsers + bot.id;
    useEffect(() => {
        setUserList(formOptions(bot.users || []));
    }, [bot]);

    const updateUsers = (values) => {
        dispatch(actions.updateBotUsers({
            history,
            currentPageUser: userId,
            bot_id: botId,
            values,
            form: formName,
        }));
    };

    if (!users || !bot) {
        return <Loading />;
    }

    const formedUsers = formOptions(users || []);

    const small = size === 'small';

    return (
        <UsersAssignForm
            updateUsers={updateUsers}
            botStatusNotEditable={botStatusNotEditable}
            small={small}
            userList={userList}
            formedUsers={formedUsers}
            initialValues={initialValues}
            setUserList={setUserList}
            form={formName}
        />
    );
};

export default withRouter(UsersAssignContainer);
