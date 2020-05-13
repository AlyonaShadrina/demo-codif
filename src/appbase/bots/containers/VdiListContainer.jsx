import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import botStatusNotEditable from '../../../utils/botStatusNotEditable';
import Loading from '../../_common/Loading';
import { profile } from '../../profile/state/selectors';
import SummaryCard from '../components/SummaryCard';
import VdiCreate from '../components/VdiManage/VdiCreate';
import VdiList from '../components/VdiManage/VdiList';
import * as actions from '../state/actions';
import * as selectors from '../state/selectors';


const VdiListContainer = ({ match }) => {
    const dispatch = useDispatch();

    const botId = match.params.id;
    const { userId } = match.params;
    const { role } = useSelector(profile);
    const isUser = role === 'user';

    // request current bot and all vdi
    useEffect(() => {
        dispatch(actions.getBot({ user_id: userId, bot_id: botId }));
        dispatch(actions.getAllVdi({ user_id: userId, bot_id: botId }));
    }, []);

    // get current bot and vdi list
    const botToEdit = useSelector(selectors.bot(botId));
    const vdi = useSelector(selectors.vdi);

    if (!botToEdit || !vdi) {
        return <Loading />;
    }

    const updateBot = (values) => {
        dispatch(actions.updateBot({ user_id: userId, bot_id: botId, values }));
    };

    const updateVdi = (values) => {
        dispatch(actions.updateVdi({ values }));
    };

    const updateBotVdiId = (id) => {
        dispatch(actions.updateBotVdi({ user_id: userId, bot_id: botId, values: { vdi_id: id } }));
    };

    const createVdi = (values) => {
        dispatch(actions.createVdi(values));
    };
    const deleteVdi = (id) => {
        dispatch(actions.deleteVdi(id));
    };

    const notEditable = botStatusNotEditable(botToEdit);

    return (
        <>
            <SummaryCard
                bot={botToEdit}
                isUser={isUser}
                botStatusNotEditable={notEditable}
                updateBot={updateBot}
                initialValues={
                    isUser
                        ? {
                            start_datetime: botToEdit.start_datetime,
                        }
                        : {
                            name: botToEdit.name,
                            description: botToEdit.description,
                            start_datetime: botToEdit.start_datetime,
                        }
                }
            />
            <VdiList
                vdiList={vdi}
                bot={botToEdit}
                updateBotVdiId={updateBotVdiId}
                updateVdi={updateVdi}
                deleteVdi={deleteVdi}
                botStatusNotEditable={notEditable}
                isUser={isUser}
            />
            { !isUser && <VdiCreate createVdi={createVdi} /> }
        </>
    );
};

export default compose(
    withRouter,
)(VdiListContainer);
