import React from 'react';

import HeadTag from '../appbase/_common/HeadTag';
import LoginAdminComponent from '../appbase/auth/components/LoginAdmin';

const LoginAdmin = () => {

    return (
        <>
            <HeadTag title="Login Admin"/>
            <LoginAdminComponent />
        </>
    );
};

export default LoginAdmin;