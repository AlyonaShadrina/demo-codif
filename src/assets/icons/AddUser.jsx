import React from 'react';
import withColorSwitch from '../../hocs/withColorSwitch';

const AddUser = ({ fill, color, ...restProps }) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
        <g clipPath="url(#clip0)">
            <path d="M5 2C6.75 2 8.125 3.41667 8.125 5.125C8.125 6.875 6.70833 8.25 5 8.25C3.25 8.25 1.875 6.83333 1.875 5.125C1.875 3.41667 3.29167 2 5 2ZM9.54167 14C8.33333 15.0417 6.75 15.6667 5 15.6667C3.25 15.6667 1.66667 15.0417 0.458333 14C0.166667 13.7083 0 13.3333 0 12.9583C0 11.2083 1.41667 9.79167 3.16667 9.79167H6.83333C8.58333 9.79167 10 11.2083 10 12.9583C10 13.375 9.83333 13.7083 9.54167 14Z" fill={color}/>
            <path d="M7.20328 7.34421C8.42366 6.12383 8.42366 4.14521 7.20328 2.92483C5.9829 1.70446 4.00428 1.70446 2.78391 2.92483C1.56353 4.14521 1.56353 6.12383 2.78391 7.34421C4.00428 8.56459 5.9829 8.56459 7.20328 7.34421Z" fill={color}/>
            <path d="M9.54167 14C8.33333 15.0417 6.75 15.6667 5 15.6667C3.25 15.6667 1.66667 15.0417 0.458333 14C0.166667 13.7083 0 13.3333 0 12.9583C0 11.2083 1.41667 9.79167 3.16667 9.79167H6.83333C8.58333 9.79167 10 11.2083 10 12.9583C10 13.375 9.83333 13.7083 9.54167 14ZM5 2C6.75 2 8.125 3.41667 8.125 5.125C8.125 6.875 6.70833 8.25 5 8.25C3.25 8.25 1.875 6.83333 1.875 5.125C1.875 3.41667 3.29167 2 5 2Z" fill={color}/>
            <path d="M10 12.9584C10 13.3334 9.83333 13.7084 9.54167 13.9584C8.33333 15.0001 6.75 15.6251 5 15.6251C3.25 15.6251 1.66667 15.0001 0.458333 13.9584C0.166667 13.7084 0 13.3334 0 12.9584C0 11.2084 1.41667 9.79175 3.16667 9.79175H6.83333C8.58333 9.79175 10 11.2084 10 12.9584Z" fill={color}/>
        </g>
        <rect x="15.1" y="2.89976" width="1.2" height="5.2" rx="0.6" transform="rotate(90 15.1 2.89976)" fill={color} stroke={color} strokeWidth="0.2"/>
        <rect x="13.1" y="6.1" width="1.2" height="5.2" rx="0.6" transform="rotate(-180 13.1 6.1)" fill={color} stroke={color} strokeWidth="0.2"/>
        <defs>
            <clipPath id="clip0">
                <rect width="10" height="13.6667" fill="white" transform="translate(0 2)"/>
            </clipPath>
        </defs>
    </svg>
);


export default withColorSwitch(AddUser);
