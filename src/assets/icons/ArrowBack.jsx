import React from 'react';
import withColorSwitch from '../../hocs/withColorSwitch';

const ArrowBack = ({ fill, color, ...restProps }) => (
    <svg width="50" height="6" viewBox="0 0 50 6" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
        <path d="M0 3L5 5.88675V0.113249L0 3ZM4.5 3.5H50V2.5H4.5V3.5Z" fill={color}/>
    </svg>
);

export default withColorSwitch(ArrowBack);
