import React from 'react';

const StatusDone = ({ props }) => (
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g filter="url(#filter0_d)">
            <circle cx="29" cy="27" r="25" fill="#E1FFF8"/>
            <circle cx="29" cy="27" r="24" stroke="white" strokeWidth="2"/>
        </g>
        <rect x="22.1177" y="36.7862" width="27.098" height="3.83792" rx="1.91896" transform="rotate(-45 22.1177 36.7862)" fill="#00AB84"/>
        <rect width="16.2588" height="3.83792" rx="1.91896" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 27.5859 36.7862)" fill="#00AB84"/>
        <defs>
            <filter id="filter0_d" x="0" y="0" width="58" height="58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
        </defs>
    </svg>
);

export default StatusDone;