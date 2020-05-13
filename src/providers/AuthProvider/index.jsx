import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as authSelectors from '../../appbase/auth/state/selectors';
import { getProfile } from '../../appbase/profile/state/actions';
import * as profileSelectors from '../../appbase/profile/state/selectors';
import AuthContext from './AuthContext';


const AuthProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const dispatch = useDispatch();

    const { token } = useSelector(authSelectors.auth);
    const profile = useSelector(profileSelectors.profile);

    useEffect(() => {
        dispatch(getProfile());
    }, [token]);

    useEffect(() => {
        setLoggedIn(!!profile.id && token);
    }, [profile, token]);

    const provideAuth = (smth) => {
        console.log('smth', smth);
        return smth + smth
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, profile, provideAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
