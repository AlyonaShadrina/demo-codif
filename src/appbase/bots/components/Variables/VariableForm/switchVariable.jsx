import { InputAdornment } from '@material-ui/core';
import React from 'react';
import { Field } from 'redux-form';
import { placeholders } from '../../../../../dictionary';

import switchIcon from '../../../../../utils/switchIcon';
import DateVariable from '../DateVariable';
import DropdownVariable from '../DropdownVariable';
import RenderField from './RenderField';


const switchVariable = ({
    initialValues,
    date,
    botStatusNotEditable,
    handleDateChange,
    label,
    change,
}) => {
    const FieldIcon = () => (
        <InputAdornment>
            {switchIcon(label, (botStatusNotEditable ? 'lightgrey' : 'primary'))}
        </InputAdornment>
    );

    switch (initialValues.type_id) {
    case 3:
        return (
            <DateVariable
                date={date}
                botStatusNotEditable={botStatusNotEditable}
                handleDateChange={handleDateChange}
            />
        );
    case 4:
        return (
            <DropdownVariable
                botStatusNotEditable={botStatusNotEditable}
                options={initialValues.values}
                change={change}
                endAdornment={<FieldIcon />}
            />
        );
    default:
        return (
            <Field
                name="values"
                component={RenderField}
                type="text"
                placeholder={placeholders.bot.variable.value(label.toLowerCase())}
                label={label}
                endAdornment={<FieldIcon />}
                disabled={botStatusNotEditable}
            />
        );
    }
};

export default switchVariable;
