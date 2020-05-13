import { Button, Fab, Grid } from '@material-ui/core';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Checkmark from '../../../../assets/icons/Checkmark';
import validate from './validate';
import UserMultipleSelect from '../UserMultipleSelect';


const UsersAssignForm = ({
    updateUsers,
    botStatusNotEditable,
    handleSubmit,
    small,
    userList,
    formedUsers,
    setUserList,
    change,
    invalid,
    pristine,
    // ...restProps,
}) => {
    const onChange = (arg) => {
        setUserList(arg);
        const ids = (arg || []).map((user) => user.value);
        change('user_ids', ids);
    };

    return (
        <form onSubmit={handleSubmit(updateUsers)}>
            <Grid
                container
                spacing={small ? 1 : 3}
                alignItems="center"
            >
                <Field
                    type="hidden"
                    name="user_ids"
                    component="input"
                    placeholder="user ids"
                />
                <Grid
                    item
                    xs={12}
                    lg={small ? 10 : 10}
                >
                    <UserMultipleSelect
                        isDisabled={botStatusNotEditable}
                        value={userList}
                        options={formedUsers}
                        onChange={onChange}
                        small={small}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    lg={small ? 2 : 2}
                >
                    {
                        !small ? (
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={invalid || pristine}
                            >
                                Update
                            </Button>
                        ) : (
                            <Fab
                                size="small"
                                color="primary"
                                type="submit"
                                disabled={invalid || pristine}
                            >
                                <Checkmark
                                    fill={!(invalid || pristine) ? 'white' : 'primary'}
                                />
                            </Fab>
                        )
                    }
                </Grid>
            </Grid>
        </form>
    );
};

export default reduxForm({
    validate,
})(UsersAssignForm);
