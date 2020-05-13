import { Input, InputAdornment } from '@material-ui/core';
import React from 'react';
import switchIcon from '../../../../../utils/switchIcon';


const RenderField = ({ input, label, type, handleBlur, disabled, placeholder, ...restProps }) => (
    <Input
        {...input}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        disableUnderline
        {...restProps}
    />
);

export default RenderField;