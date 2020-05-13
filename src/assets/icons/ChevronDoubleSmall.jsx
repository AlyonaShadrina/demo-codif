import React from 'react';
import withColorSwitch from '../../hocs/withColorSwitch';

const ChevronDoubleSmall = ({ fill, color, ...restProps }) => (
    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
        <path fillRule="evenodd" clipRule="evenodd" d="M1.1046 6.19739C1.24408 6.05538 1.47021 6.05538 1.60968 6.19739L3.5 8.12208L5.39032 6.19739C5.52979 6.05538 5.75592 6.05538 5.8954 6.19739C6.03487 6.3394 6.03487 6.56964 5.8954 6.71165L3.75254 8.89347C3.61307 9.03547 3.38693 9.03547 3.24746 8.89347L1.1046 6.71165C0.965132 6.56964 0.965132 6.3394 1.1046 6.19739Z" fill={color} stroke={color} strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M5.8954 3.80255C5.75592 3.94456 5.52979 3.94456 5.39032 3.80255L3.5 1.87786L1.60968 3.80255C1.47021 3.94456 1.24408 3.94456 1.1046 3.80255C0.965131 3.66054 0.965131 3.4303 1.1046 3.28829L3.24746 1.10647C3.38693 0.964464 3.61307 0.964464 3.75254 1.10647L5.8954 3.28829C6.03487 3.4303 6.03487 3.66054 5.8954 3.80255Z" fill={color} stroke={color} strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default withColorSwitch(ChevronDoubleSmall);
