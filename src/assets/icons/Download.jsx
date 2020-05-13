import React from 'react';
import withColorSwitch from '../../hocs/withColorSwitch';

const Download = ({ fill, color, ...restProps }) => (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
        <path d="M2.25469 6C1.46381 7.13383 1 8.51275 1 10C1 13.866 4.13401 17 8 17C11.866 17 15 13.866 15 10C15 8.51275 14.5362 7.13383 13.7453 6" stroke={color} strokeLinecap="round"/>
        <path d="M8.5 1C8.5 0.723858 8.27614 0.5 8 0.5C7.72386 0.5 7.5 0.723858 7.5 1H8.5ZM7.64645 13.3536C7.84171 13.5488 8.15829 13.5488 8.35355 13.3536L11.5355 10.1716C11.7308 9.97631 11.7308 9.65973 11.5355 9.46447C11.3403 9.2692 11.0237 9.2692 10.8284 9.46447L8 12.2929L5.17157 9.46447C4.97631 9.2692 4.65973 9.2692 4.46447 9.46447C4.2692 9.65973 4.2692 9.97631 4.46447 10.1716L7.64645 13.3536ZM7.5 1L7.5 13H8.5V1H7.5Z" fill={color}/>
    </svg>
);

export default withColorSwitch(Download);