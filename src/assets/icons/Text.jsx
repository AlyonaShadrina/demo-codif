import React from 'react';
import withColorSwitch from '../../hocs/withColorSwitch';

const Text = ({ fill, color, ...restProps }) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
        <rect width="14" height="2.8" rx="1.4" transform="matrix(0 -1 -1 0 8.3999 14)" fill={color}/>
        <rect width="14" height="2.8" rx="1.4" transform="matrix(1 0 0 -1 0 2.80005)" fill={color}/>
    </svg>
);

export default withColorSwitch(Text);