import React from 'react';
import withColorSwitch from '../../hocs/withColorSwitch';

const Person = ({ fill, color, ...restProps }) => (
    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
        <g clipPath="url(#clip0)">
            <path d="M5 0C6.75 0 8.125 1.41667 8.125 3.125C8.125 4.875 6.70833 6.25 5 6.25C3.25 6.25 1.875 4.83333 1.875 3.125C1.875 1.41667 3.29167 0 5 0ZM9.54167 12C8.33333 13.0417 6.75 13.6667 5 13.6667C3.25 13.6667 1.66667 13.0417 0.458333 12C0.166667 11.7083 0 11.3333 0 10.9583C0 9.20833 1.41667 7.79167 3.16667 7.79167H6.83333C8.58333 7.79167 10 9.20833 10 10.9583C10 11.375 9.83333 11.7083 9.54167 12Z" fill={color} />
            <path d="M7.20328 5.34426C8.42366 4.12389 8.42366 2.14526 7.20328 0.924887C5.9829 -0.29549 4.00428 -0.29549 2.78391 0.924887C1.56353 2.14526 1.56353 4.12389 2.78391 5.34426C4.00428 6.56464 5.9829 6.56464 7.20328 5.34426Z" fill={color} />
            <path d="M9.54167 12C8.33333 13.0417 6.75 13.6667 5 13.6667C3.25 13.6667 1.66667 13.0417 0.458333 12C0.166667 11.7083 0 11.3333 0 10.9583C0 9.20833 1.41667 7.79167 3.16667 7.79167H6.83333C8.58333 7.79167 10 9.20833 10 10.9583C10 11.375 9.83333 11.7083 9.54167 12ZM5 0C6.75 0 8.125 1.41667 8.125 3.125C8.125 4.875 6.70833 6.25 5 6.25C3.25 6.25 1.875 4.83333 1.875 3.125C1.875 1.41667 3.29167 0 5 0Z" fill={color} />
            <path d="M10 10.9584C10 11.3334 9.83333 11.7084 9.54167 11.9584C8.33333 13.0001 6.75 13.6251 5 13.6251C3.25 13.6251 1.66667 13.0001 0.458333 11.9584C0.166667 11.7084 0 11.3334 0 10.9584C0 9.20839 1.41667 7.79173 3.16667 7.79173H6.83333C8.58333 7.79173 10 9.20839 10 10.9584Z" fill={color} />
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="10" height="13.6667" fill="white" />
            </clipPath>
        </defs>
    </svg>
);


export default withColorSwitch(Person);