import { InputBase } from '@material-ui/core';
import React from 'react';


const RenderTextField = ({ input, item, ...restProps }) => (
    <InputBase
        id={item.name}
        type="text"
        {...input}
        {...restProps}
    />
);

export default RenderTextField;
