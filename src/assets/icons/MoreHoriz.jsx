import React from 'react';
import withColorSwitch from '../../hocs/withColorSwitch';

const MoreHoriz = ({ fill, color, ...restProps }) => (
    <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
        <circle cx="14" cy="2" r="2" fill={color}/>
        <circle cx="8" cy="2" r="2" fill={color}/>
        <circle cx="2" cy="2" r="2" fill={color}/>
    </svg>
);

export default withColorSwitch(MoreHoriz);