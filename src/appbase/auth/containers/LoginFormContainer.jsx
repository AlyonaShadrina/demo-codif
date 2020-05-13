import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import * as actions from '../state/actions';
import * as selectors from '../state/selectors';


const LoginFormContainer = ({ title, history }) => {
    const dispatch = useDispatch();
    const { error } = useSelector(selectors.auth);

    const handleSubmit = (values) => dispatch(actions.requestLogin({ values, history }));

    return (
        <LoginForm
            onSubmit={handleSubmit}
            authError={error}
            title={title}
        />
    );
};

export default withRouter(LoginFormContainer);
