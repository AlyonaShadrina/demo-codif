import { Box, Button, Divider } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';

import { reduxFormNames } from '../../../../config';
import ContactInfo from './ContactInfo';
import ResetPassword from './ResetPassword';
import OfficeDetails from './OfficeDetails';
import validate from './validate';


const UserForm = ({
    handleSubmit, updateProfile, user, change, isProfilePage, pristine, invalid,
}) => {
    const isUser = user.role === 'user';

    const dispatch = useDispatch();

    const [temporaryAvatar, setTemporaryAvatar] = useState(null);

    const resetForm = () => {
        dispatch(reset(reduxFormNames.editUser));
        setTemporaryAvatar(null);
    };

    return (
        <form onSubmit={handleSubmit(updateProfile)}>
            {
                isUser && (
                    <Field
                        component="input"
                        name="manager_id"
                        type="hidden"
                    />
                )
            }
            <Field
                component="input"
                name="avatar"
                type="hidden"
            />
            <Box mb={3}>
                <ContactInfo
                    user={user}
                    isProfilePage={isProfilePage}
                    change={change}
                    temporaryAvatar={temporaryAvatar}
                    setTemporaryAvatar={setTemporaryAvatar}
                />
            </Box>
            <Box mb={3}><Divider light /></Box>
            {isProfilePage && (
                <>
                    <Box mb={3}><ResetPassword /></Box>
                    <Box mb={3}><Divider light /></Box>
                </>
            )}
            <Box mb={3}>
                <OfficeDetails />
            </Box>
            <Box align="right">
                <Box mr={3} component="span">
                    <Button
                        type="reset"
                        variant="outlined"
                        disabled={pristine}
                        onClick={resetForm}
                    >
                        Cancel
                    </Button>
                </Box>
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    disabled={pristine || invalid}
                >
                    Save
                </Button>
            </Box>
        </form>
    );
};

// when you are on /users/[id]/profile and click 'profile' in header dropdown,
// initial values aren't showed on profile page.
// so we need enableReinitialize and destroyOnUnmount
// (see https://stackoverflow.com/a/58432964)

export default reduxForm({
    form: reduxFormNames.editUser,
    enableReinitialize: true,
    destroyOnUnmount: false,
    validate,
})(UserForm);
