import { Select } from '@material-ui/core';
import React from 'react';


const RenderSelectField = ({
    input,
    label,
    children,
    className,
    menuClassList,
    selectClass,
    onChange,
    onExit,
    open,
    ...custom
}) => (
    <Select
        {...input}
        disableUnderline
        className={className}
        classes={{
            select: selectClass,
        }}
        MenuProps={{
            getContentAnchorEl: null,
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
            },
            onExit: onExit ? () => onExit(input.value) : null,
            onChange: (e) => e.preventDefault(),
            ...open,
            classes: {
                list: menuClassList,
            },
        }}
        // if you add custom icon, it becomes unclickable
        {...custom}
    >
        {children}
    </Select>
);

export default RenderSelectField;
