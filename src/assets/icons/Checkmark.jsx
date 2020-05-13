import React from 'react';
import withColorSwitch from '../../hocs/withColorSwitch';

const Checkmark = ({ fill, color, ...restProps }) => (
    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
        <rect x="5.81348" y="11.0649" width="15.02" height="1.49863" rx="0.749316" transform="rotate(-45 5.81348 11.0649)" fill={color}/>
        <rect width="9.01198" height="1.50342" rx="0.751708" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 7.93555 11.0605)" fill={color}/>
    </svg>
);

export default withColorSwitch(Checkmark);