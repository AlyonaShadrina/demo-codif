import { makeStyles } from '@material-ui/core';
import React from 'react';

import { buttons } from '../../../../dictionary';
import switchIcon from '../../../../utils/switchIcon';
import AddButtonOutlined from '../../../_common/AddButtonOutlined';
import Actions from '../../../_common/ButtonWithMenuActions';


const useStyles = makeStyles(() => ({
    addBtn: {
        position: 'absolute',
        right: 30,
        top: 30,
    },
}));

const AddBtn = ({ types, handleAddNewVariable, disabled }) => {
    const classes = useStyles();

    const Button = (props) => (
        <AddButtonOutlined
            text={buttons.bot.addNewVariable}
            className={classes.addBtn}
            disabled={disabled}
            {...props}
        />
    );

    const formActionItems = (typesArr) => (
        typesArr.map((type) => ({
            text: type.label,
            onClick: () => handleAddNewVariable({ type_id: type.id, id: Date.now() }),
            icon: switchIcon(type.label),
        }))
    );

    return <Actions actionItems={formActionItems(types)} OpenButton={Button} />;
};

export default AddBtn;
