import React from 'react';
import withColorSwitch from '../../hocs/withColorSwitch';

const Play = ({ fill, color, ...restProps }) => (
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
        <path d="M5.56218 3.73205L13.0622 8.06218L5.56218 12.3923L5.56218 3.73205Z" fill={color} stroke={color} strokeWidth="2"/>
    </svg>

);

export default withColorSwitch(Play);