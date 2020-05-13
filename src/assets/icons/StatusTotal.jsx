import React from 'react';

const StatusTotal = ({ props }) => (
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g filter="url(#filter0_d)">
            <circle cx="29" cy="27" r="25" fill="#E1FFF8"/>
            <circle cx="29" cy="27" r="24" stroke="white" strokeWidth="2"/>
        </g>
        <circle cx="29" cy="27" r="14" fill="#00AB84" stroke="white" strokeWidth="2"/>
        <mask id="path-4-outside-1" maskUnits="userSpaceOnUse" x="14" y="12" width="18" height="19" fill="black">
            <rect fill="white" x="14" y="12" width="18" height="19"/>
            <path d="M30 14C27.0435 14 24.1629 14.936 21.771 16.6738C19.3791 18.4116 17.5988 20.862 16.6852 23.6738L30 28V14Z"/>
        </mask>
        <path d="M30 14C27.0435 14 24.1629 14.936 21.771 16.6738C19.3791 18.4116 17.5988 20.862 16.6852 23.6738L30 28V14Z" fill="#FA8072"/>
        <path d="M30 14C27.0435 14 24.1629 14.936 21.771 16.6738C19.3791 18.4116 17.5988 20.862 16.6852 23.6738L30 28V14Z" stroke="white" strokeWidth="4" mask="url(#path-4-outside-1)"/>
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

export default StatusTotal;