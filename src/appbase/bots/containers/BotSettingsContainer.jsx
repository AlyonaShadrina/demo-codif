import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';

import botStatusNotEditable from '../../../utils/botStatusNotEditable';
import ActionConfirmButton from '../../_common/ActionConfirmButton';
import Loading from '../../_common/Loading';
import { profile } from '../../profile/state/selectors';
import BotSettingsList from '../components/BotSettingsList';
import * as actions from '../state/actions';
import * as selectors from '../state/selectors';


const BotSettingsContainer = ({ match, history }) => {
    const dispatch = useDispatch();

    const { userId } = match.params;
    const botId = match.params.id;

    const { role } = useSelector(profile);
    const botToEdit = useSelector(selectors.bot(botId));

    const isUser = role === 'user';

    useEffect(() => {
        dispatch(actions.getBot({ user_id: userId, bot_id: botId }));
    }, [userId, botId]);

    if (!botToEdit) {
        return <Loading />;
    }

    const updateBot = (values) => {
        if (values.user && values.user.id) {
            values.user_id = values.user.id;
        }
        dispatch(actions.updateBot({
            user_id: userId, bot_id: botId, values, history,
        }));
    };

    const updateBotVdi = (values) => {
        dispatch(actions.updateBotVdi({ user_id: userId, bot_id: botId, values }));
    };

    const deleteBot = () => {
        dispatch(actions.deleteBot({ user_id: userId, bot_id: botId, history }));
    };

    const notEditable = botStatusNotEditable(botToEdit);

    return (
        <>
            <BotSettingsList
                role={role}
                bot={botToEdit}
                updateBot={updateBot}
                updateBotVdi={updateBotVdi}
                botStatusNotEditable={notEditable}
            />
            {
                !isUser && (
                    <ActionConfirmButton
                        modalTitle="Are you sure you want to delete BOT?"
                        modalText="This action is irreversible. All settings and files wil be deleted too."
                        action={deleteBot}
                    >
                        { (open) => (
                            <Button
                                onClick={open}
                                style={{ margin: '50px auto 0', display: 'block' }}
                                disabled={notEditable}
                                className="deleteButton"
                            >
                                Delete BOT
                            </Button>
                        )}
                    </ActionConfirmButton>
                )
            }
        </>
    );
};

export default withRouter(BotSettingsContainer);
