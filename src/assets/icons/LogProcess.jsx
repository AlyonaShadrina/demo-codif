import React from 'react';

const LogProcess = ({ fill, color, ...restProps }) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
        <circle cx="8" cy="8" r="7.5" fill="#EFF7FF" stroke="#42A3FF"/>
        <path d="M12 8C12 5.79086 10.2091 4 8 4M8 12C5.79086 12 4 10.2091 4 8" stroke="#42A3FF" strokeWidth="1.25" strokeLinecap="round"/>
    </svg>
);


export default LogProcess;