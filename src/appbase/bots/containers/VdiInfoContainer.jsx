import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';

import VDIInfo from '../components/VDIInfo';
import * as actions from '../state/actions';
import * as selectors from '../state/selectors';


const VdiInfoContainer = ({
    botId, botStatusNotEditable, botVdi, updateBotVdi, match,
}) => {
    const dispatch = useDispatch();
    const vdi = useSelector(selectors.vdi);

    const { userId } = match.params;

    useEffect(() => {
        dispatch(actions.getAllVdi());
    }, []);

    const updateBotVdiId = (values) => {
        updateBotVdi(values);
    };

    if (!vdi) {
        return null;
    }

    return (
        <VDIInfo
            botId={botId}
            botStatusNotEditable={botStatusNotEditable}
            vdiList={vdi}
            botVdi={botVdi}
            updateBotVdi={updateBotVdiId}
            userId={userId}
            initialValues={{
                vdi_id: botVdi ? botVdi.id : null,
            }}
        />
    );
};

export default withRouter(VdiInfoContainer);
