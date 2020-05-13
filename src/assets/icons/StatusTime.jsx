import React from 'react';

const StatusTime = ({ props }) => (
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
            <circle cx="29" cy="27" r="25" fill="#E1FFF8"/>
            <circle cx="29" cy="27" r="23.5" stroke="white" strokeWidth="3"/>
        </g>
        <rect x="27" y="10" width="3" height="20" rx="1.5" fill="#00AB84"/>
        <rect x="27" y="30" width="3" height="14" rx="1.5" transform="rotate(-90 27 30)" fill="#00AB84"/>
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

export default StatusTime;