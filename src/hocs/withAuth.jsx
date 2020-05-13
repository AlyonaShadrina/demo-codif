import React from 'react';
import AuthContext from '../providers/AuthProvider/AuthContext';


const withAuth = (WrappedComponent) => (props) => (
    <AuthContext.Consumer>
        {({ isLoggedIn, profile }) => (
            <WrappedComponent
                isLoggedIn={isLoggedIn}
                profile={profile}
                {...props}
            />
        )}
    </AuthContext.Consumer>
);

export default withAuth;
