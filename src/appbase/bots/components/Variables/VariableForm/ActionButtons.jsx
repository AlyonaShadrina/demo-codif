import { Fab, Grid } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';

import Checkmark from '../../../../../assets/icons/Checkmark';
import Delete from '../../../../../assets/icons/Delete';
import ActionConfirmButton from '../../../../_common/ActionConfirmButton';


const ActionButtons = ({
    invalid, pristine, initialValues, form, destroy, deleteVariable, botStatusNotEditable, isUser,
}) => {
    const dispatch = useDispatch();

    if (botStatusNotEditable) {
        return null;
    }

    const handleDelete = () => {
        dispatch(destroy(form));
        deleteVariable();
    };

    return (
        <Grid
            container
            justify="space-between"
            alignItems="center"
        >
            <Fab
                size="small"
                color="primary"
                type="submit"
                disabled={invalid || pristine}
                data-testid="submitVar"
            >
                <Checkmark fill={!(invalid || pristine) ? 'white' : 'primary'} />
            </Fab>
            <ActionConfirmButton
                modalTitle={`Delete ${initialValues.label || ''} variable?`}
                modalText="This action is irreversible."
                action={handleDelete}
            >
                {!isUser
                    ? (open) => (
                        <Fab
                            size="small"
                            color="inherit"
                            onClick={open}
                            data-testid="deleteVar"
                        >
                            <Delete
                                title="delete"
                                fill="lightgrey"
                            />
                        </Fab>
                    )
                    : null}
            </ActionConfirmButton>
        </Grid>
    );
};

export default ActionButtons;
