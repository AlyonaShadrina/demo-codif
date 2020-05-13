import React from 'react';
import withColorSwitch from '../../hocs/withColorSwitch';

const ChevronDownSmall = ({ fill, color, ...restProps }) => (
      <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
            <rect x="3.99121" y="5.00742" width="7.08155" height="1.41631" rx="0.708155" transform="rotate(-45 3.99121 5.00742)" fill={color} />
            <rect width="7.08155" height="1.41631" rx="0.708155" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 6.00879 5.00742)" fill={color} />
      </svg>
);

export default withColorSwitch(ChevronDownSmall);
