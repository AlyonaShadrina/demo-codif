import React from 'react';
import withColorSwitch from '../../hocs/withColorSwitch';

const Number = ({ fill, color, ...restProps }) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
        <rect width="8" height="1.5" rx="0.75" transform="matrix(0 -1 -1 0 8.75 12)" fill={color}/>
        <rect width="8" height="1.5" rx="0.75" transform="matrix(1 0 0 -1 4 8.75)" fill={color}/>
        <circle cx="8" cy="8" r="7.5" stroke={color}/>
    </svg>
);

export default withColorSwitch(Number);