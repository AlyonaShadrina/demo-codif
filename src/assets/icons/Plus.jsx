import React from 'react';
import withColorSwitch from '../../hocs/withColorSwitch';

const Plus = ({ fill, color, ...restProps }) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
        <rect y="7.20001" width="16" height="2" rx="1" fill={color} />
        <rect x="7.19995" y="16" width="16" height="2" rx="1" transform="rotate(-90 7.19995 16)" fill={color} />
    </svg>
);


export default withColorSwitch(Plus);