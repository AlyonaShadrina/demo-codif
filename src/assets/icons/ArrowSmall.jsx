import React from 'react';
import withColorSwitch from '../../hocs/withColorSwitch';

const ArrowSmall = ({ fill, color, deg, ...restProps }) => (
    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"
         style={{
             transform: `rotateZ(${deg}deg)`
         }}
         {...restProps}
    >
        <path
            d="M4.5 1C4.5 0.723858 4.27614 0.5 4 0.5C3.72386 0.5 3.5 0.723858 3.5 1H4.5ZM3.64645 9.35355C3.84171 9.54882 4.15829 9.54882 4.35355 9.35355L7.53553 6.17157C7.7308 5.97631 7.7308 5.65973 7.53553 5.46447C7.34027 5.2692 7.02369 5.2692 6.82843 5.46447L4 8.29289L1.17157 5.46447C0.976311 5.2692 0.659728 5.2692 0.464466 5.46447C0.269204 5.65973 0.269204 5.97631 0.464466 6.17157L3.64645 9.35355ZM3.5 1L3.5 9H4.5V1H3.5Z"
            fill={color}
        />
    </svg>

);

export default withColorSwitch(ArrowSmall);
