import React from 'react';
import withColorSwitch from '../../hocs/withColorSwitch';

const ChevronDown = ({ fill, color, ...restProps }) => (
    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps} >
        <rect x="5.63599" y="7.07104" width="10" height="2" rx="1" transform="rotate(-45 5.63599 7.07104)" fill={color} />
        <rect width="10" height="2" rx="1" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 8.48535 7.07104)" fill={color} />
    </svg>
);

export default withColorSwitch(ChevronDown);

