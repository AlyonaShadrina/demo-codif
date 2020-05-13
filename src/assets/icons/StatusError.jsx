import React from 'react';

const StatusError = ({ props }) => (
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g filter="url(#filter0_d)">
            <circle cx="29" cy="27" r="24" fill="#FFEAE8" stroke="white" strokeWidth="2"/>
            <path d="M28.7221 11.375C29.8497 11.375 30.758 12.3001 30.7372 13.4276L30.4336 29.9117C30.4167 30.83 29.6674 31.5656 28.7489 31.5656C27.8325 31.5656 27.0841 30.8333 27.0643 29.9171L26.7071 13.4341C26.6826 12.3042 27.5919 11.375 28.7221 11.375ZM28.7844 36.1375C29.6302 36.1375 30.3302 36.4219 30.8844 36.9906C31.4531 37.5594 31.7375 38.2448 31.7375 39.0469C31.7375 39.8635 31.4531 40.5635 30.8844 41.1469C30.3302 41.7156 29.6302 42 28.7844 42C27.9531 42 27.2604 41.7156 26.7063 41.1469C26.1521 40.5635 25.875 39.8635 25.875 39.0469C25.875 38.2448 26.1521 37.5594 26.7063 36.9906C27.2604 36.4219 27.9531 36.1375 28.7844 36.1375Z" fill="#FA8072"/>
        </g>
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

export default StatusError;