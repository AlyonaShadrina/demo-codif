import React from 'react';

const File = ({ fill, color, ...restProps }) => (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
            <path d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H14C17.0376 0.5 19.5 2.96243 19.5 6V21C19.5 22.3807 18.3807 23.5 17 23.5H3C1.61929 23.5 0.5 22.3807 0.5 21V3Z" fill="white" stroke="#42A3FF"/>
    </svg>
);


export default File;