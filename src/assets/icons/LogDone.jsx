import React from 'react';

const LogDone = ({ fill, color, ...restProps }) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
        <circle cx="8" cy="8" r="7.5" fill="#E1FFF8" stroke="#00AB84"/>
        <rect x="5.79785" y="11.1316" width="8.67136" height="1.22813" rx="0.614067" transform="rotate(-45 5.79785 11.1316)" fill="#00AB84"/>
        <rect width="5.20282" height="1.22813" rx="0.614067" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 7.54736 11.1316)" fill="#00AB84"/>
    </svg>
);


export default LogDone;