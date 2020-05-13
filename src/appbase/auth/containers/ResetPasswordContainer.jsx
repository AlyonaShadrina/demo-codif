import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { profile } from '../../profile/state/selectors';
import * as actions from '../state/actions';
import ResetPasswordForm from '../components/ResetPasswordForm';
import * as selectors from '../state/selectors';

// TODO: reset password page
const ResetPasswordContainer = () => {
    const dispatch = useDispatch();
    const {
        token, reset_loading, reset_sent, reset_error,
    } = useSelector(selectors.auth);
    const { email } = useSelector(profile);
    const handleSubmit = (values) => dispatch(actions.requestResetPassword(values));

    const initialValues = {
        token,
        email,
    };

    return (
        <div>
            <ResetPasswordForm
                onSubmit={handleSubmit}
                initialValues={initialValues}
                loading={reset_loading}
                ok={reset_sent}
                error={reset_error}
            />
        </div>
    );
};

export default ResetPasswordContainer;
