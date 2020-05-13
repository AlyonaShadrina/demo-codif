import React from 'react';

import HeadTag from '../appbase/_common/HeadTag';
import LoginModeControl from '../appbase/auth';

const Login = () => {

    return (
        <>
            <HeadTag title="Login"/>
            <LoginModeControl />
        </>
    );
};

export default Login;