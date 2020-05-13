import React from 'react';
import withColorSwitch from '../../hocs/withColorSwitch';

const BigSelect = ({ fill, color, background = 'white', ...restProps }) => {
    return (
        <svg width='50' height='50' viewBox='0 0 50 50' fill={background} xmlns='http://www.w3.org/2000/svg' {...restProps}>
            <circle cx='25' cy='25' r='24' stroke={color} strokeWidth='2' />
            <rect x='18.1177' y='34.7861' width='27.098' height='3.83792' rx='1.91896' transform='rotate(-45 18.1177 34.7861)' fill={color} />
            <rect width='16.2588' height='3.83792' rx='1.91896' transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 23.5859 34.7861)' fill={color} />
        </svg>
    )
};

export default withColorSwitch(BigSelect);