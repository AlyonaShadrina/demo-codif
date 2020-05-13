import {
    Button, Dialog, DialogActions, DialogContent, DialogTitle,
} from '@material-ui/core';
import React, { useState } from 'react';
import { reduxForm } from 'redux-form';

import AddButton from '../AddButton';


const AddButtonWithModalForm = ({
    children,
    addButtonText,
    dialogTitle,
    onSubmitAction,
    beforeDialogOpened,
    handleSubmit,
    invalid,
    CustomButton,
}) => {
    const [isOpenedDialog, setOpenedDialog] = useState(false);

    const openDialog = () => {
        if (beforeDialogOpened) {
            beforeDialogOpened();
        }
        setOpenedDialog(true);
    };

    const closeDialog = () => {
        setOpenedDialog(false);
    };

    const handleSubmitAction = (values) => {
        onSubmitAction(values);
        closeDialog();
    };

    return (
        <>
            {CustomButton ? (
                <CustomButton onClick={openDialog} />
            ) : (
                <AddButton
                    action={openDialog}
                    text={addButtonText}
                />
            )}
            <Dialog
                open={isOpenedDialog}
                onClose={closeDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="md"
            >
                <DialogTitle>{dialogTitle}</DialogTitle>

                <form onSubmit={handleSubmit(handleSubmitAction)}>
                    <DialogContent>
                        {children}
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={closeDialog}
                            color="primary"
                            size="small"
                            variant="outlined"
                            autoFocus
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            color="primary"
                            size="small"
                            variant="contained"
                            disabled={invalid}
                        >
                            Add
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
};

export default reduxForm()(AddButtonWithModalForm);
