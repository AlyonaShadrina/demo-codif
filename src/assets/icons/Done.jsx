import React from 'react';
import withColorSwitch from '../../hocs/withColorSwitch';

const Done = ({ fill, color, ...restProps }) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
        <circle cx="14" cy="14" r="13.5" fill="white" stroke={color}/>
        <rect x="10.8135" y="19.0649" width="15.02" height="1.49863" rx="0.749316" transform="rotate(-45 10.8135 19.0649)" fill={color} />
        <rect width="9.01198" height="1.50342" rx="0.751708" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 12.9355 19.0605)" fill={color} />
    </svg>
);

export default withColorSwitch(Done);