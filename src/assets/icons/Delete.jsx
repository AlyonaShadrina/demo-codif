import React from 'react';
import withColorSwitch from '../../hocs/withColorSwitch';

const Delete = ({ fill, color, ...restProps }) => (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
        <path fillRule="evenodd" clipRule="evenodd" d="M1.34131 0.447025L7.55297 6.65868C7.79986 6.90557 7.79986 7.30586 7.55297 7.55274C7.30608 7.79963 6.90579 7.79963 6.6589 7.55274L0.447249 1.34109C0.200361 1.0942 0.200361 0.693914 0.447249 0.447025C0.694138 0.200137 1.09442 0.200137 1.34131 0.447025Z" fill={color}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M6.65869 0.447025L0.447031 6.65868C0.200143 6.90557 0.200143 7.30586 0.447031 7.55274C0.69392 7.79963 1.09421 7.79963 1.3411 7.55274L7.55275 1.34109C7.79964 1.0942 7.79964 0.693914 7.55275 0.447025C7.30586 0.200137 6.90558 0.200137 6.65869 0.447025Z" fill={color}/>
    </svg>
);

export default withColorSwitch(Delete);