import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core';
import React from 'react';


const ActionConfirmButton = ({
    children, modalTitle, modalText, action,
}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const confirm = () => {
        action();
        handleClose();
    };

    return (
        <>
            {children && children(handleClickOpen)}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>{modalTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {modalText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        color="primary"
                        size="small"
                        variant="outlined"
                        autoFocus
                        data-testid="actionReject"
                    >
                        No
                    </Button>
                    <Button
                        onClick={confirm}
                        color="primary"
                        size="small"
                        variant="contained"
                        data-testid="actionConfirm"
                    >
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ActionConfirmButton;
