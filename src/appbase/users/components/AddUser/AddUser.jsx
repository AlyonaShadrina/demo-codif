import { Grid, makeStyles, MenuItem } from '@material-ui/core';
import React from 'react';
import { Field } from 'redux-form';
import { reduxFormNames } from '../../../../config';
import colors from '../../../../styles/colors';

import AddButtonWithModalForm from '../../../_common/AddButtonWithModalForm';
import Loading from '../../../_common/Loading';
import RenderSelectField from '../../../_common/RenderSelectFieldBordered';
import RenderField from '../../../_common/RenderTextFieldBordered';
import ManagerItem from './ManagerItem';
import validate from './validate';


const useStyles = makeStyles(() => ({
    field: {
        '& input': {
            marginBottom: 0,
            border: `1px solid ${colors.lightGrey}`,
        },
    },
}));

const AddUser = ({
    role, addUser, getManagers, managerUsersIds, allUsers, initialValues, form, CustomButton, className, managerIds = []
}) => {
    const classes = useStyles();

    const isUser = role === 'user';

    return (
        <AddButtonWithModalForm
            addButtonText={`Add ${role}`}
            dialogTitle={`Add ${role}`}
            form={form || reduxFormNames.addUser}
            onSubmitAction={addUser}
            validate={validate}
            // beforeDialogOpened={getManagers}
            initialValues={initialValues}
            CustomButton={CustomButton}
        >
            {
                !managerUsersIds
                    ? (
                        <Loading />
                    )
                    : (
                        <>
                            <Field
                                component="input"
                                name="role"
                                type="hidden"
                            />
                            <Grid container spacing={3}>
                                <Grid item xs={12} lg={6}>
                                    <Field
                                        name="first_name"
                                        id="first_name"
                                        type="text"
                                        placeholder="Enter first name"
                                        label="First name"
                                        component={RenderField}
                                        className={classes.field}
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Field
                                        name="last_name"
                                        id="last_name"
                                        type="text"
                                        placeholder="Enter last name"
                                        label="Last name"
                                        component={RenderField}
                                        className={classes.field}
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Field
                                        name="email"
                                        id="last_name"
                                        type="text"
                                        placeholder="Enter email"
                                        label="Email"
                                        component={RenderField}
                                        className={classes.field}
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    {
                                        isUser && (
                                            <Field
                                                name="manager_id"
                                                component={RenderSelectField}
                                                className={classes.bordered}
                                                placeholder="Select manager"
                                                label="Manager"
                                            >
                                                {managerIds.map((id) => (
                                                    <MenuItem value={id} key={id}>
                                                        <ManagerItem manager={allUsers[id]} />
                                                    </MenuItem>
                                                ))}
                                            </Field>
                                        )
                                    }
                                </Grid>
                            </Grid>
                        </>
                    )
            }
        </AddButtonWithModalForm>
    );
};

export default AddUser;
