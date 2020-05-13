import { Button, Grid } from '@material-ui/core';
import React from 'react';

import ActionConfirmButton from '../../../../_common/ActionConfirmButton';


const ActionButtons = ({
    handleDelete, SubmitButton, vdiName, invalid, pristine,
}) => (
    <>
        {
            SubmitButton ? (
                <SubmitButton
                    disabled={invalid || pristine}
                />
            ) : (
                <Grid item>
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        disabled={invalid || pristine}
                    >
                        Update
                    </Button>
                </Grid>
            )
        }
        {handleDelete && (
            <ActionConfirmButton
                modalTitle={`Are you sure you want to delete "${vdiName}" VDI?`}
                modalText="This action is irreversible."
                action={handleDelete}
            >
                {(open) => (
                    <Grid item>
                        <Button onClick={open} className="deleteButton">
                            Delete
                        </Button>
                    </Grid>
                )}
            </ActionConfirmButton>
        )}
    </>
);

export default ActionButtons;
