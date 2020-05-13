import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ForgotPassword from '../components/ForgotPassword';
import * as actions from '../state/actions';
import * as selectors from '../state/selectors';


const ForgotPasswordContainer = () => {
    const dispatch = useDispatch();
    const { forgot_loading, forgot_sent, forgot_error } = useSelector(selectors.auth);

    const handleSubmit = (values) => dispatch(actions.requestForgotPassword(values));

    return (
        <ForgotPassword
            onSubmit={handleSubmit}
            forgotLoading={forgot_loading}
            forgotSent={forgot_sent}
            forgotError={forgot_error}
        />
    );
};

export default ForgotPasswordContainer;
