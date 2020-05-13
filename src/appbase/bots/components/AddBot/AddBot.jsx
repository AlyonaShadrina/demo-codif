import React from 'react';
import { Link } from 'react-router-dom';

import { paths, buttons } from '../../../../dictionary';
import AddButton from '../../../_common/AddButton';


const AddBot = () => (
    <Link to={paths.admin + paths.bots + paths.create}>
        <AddButton text={buttons.bot.addNewBot} />
    </Link>
);

export default AddBot;
