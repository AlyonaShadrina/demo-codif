import React from 'react';
import withColorSwitch from '../../hocs/withColorSwitch';

const Add = ({ fill, color, ...restProps }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
        <circle cx="10" cy="10" r="9.5" stroke={color}/>
        <rect x="9.5" y="6.00012" width="1" height="8" rx="0.5" fill={color}/>
        <rect x="6" y="10.5001" width="1" height="8" rx="0.5" transform="rotate(-90 6 10.5001)" fill={color}/>
    </svg>
);


export default withColorSwitch(Add);