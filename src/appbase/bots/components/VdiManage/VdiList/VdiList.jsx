import React from 'react';
import VdiItem from './VdiItem';


const VdiList = ({
    vdiList, bot, updateBotVdiId, updateVdi, deleteVdi, botStatusNotEditable, isUser,
}) => (
    Object.values(vdiList).map((vdi) => (
        <VdiItem
            key={vdi.id}
            bot={bot}
            vdi={vdi}
            updateBotVdiId={updateBotVdiId}
            updateVdi={updateVdi}
            deleteVdi={deleteVdi}
            botStatusNotEditable={botStatusNotEditable}
            isUser={isUser}
        />
    ))
);

export default VdiList;
