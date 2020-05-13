import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';

import bgRhombus from '../../../../../assets/bg-rhombus.svg';
import { reduxFormNames } from '../../../../../config';
import VdiForm from '../VdiForm';


const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${bgRhombus})`,
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 385,
    },
    formControl: {
        width: '100%',
    },
    textField: {
        padding: '5px 10px',
        fontSize: 16,
        border: `1px solid ${theme.palette.grey.A100}`,
    },
    label: {
        fontSize: 12,
        marginLeft: 10,
        textTransform: 'capitalize',
    },
    submit: {
        marginTop: 20,
    },
}));

const SubmitButton = (props) => {
    const classes = useStyles();

    return (
        <Button
            type="submit"
            color="primary"
            variant="contained"
            className={classes.submit}
            {...props}
        >
            Add new VDI
        </Button>
    );
};

const VdiCreate = ({ createVdi }) => {
    const classes = useStyles();

    const [showForm, setShowForm] = useState(false);

    return (
        <Paper className={classes.container}>
            {
                showForm
                    ? (
                        <VdiForm
                            form={reduxFormNames.addVdi}
                            onVdiSubmit={createVdi}
                            SubmitButton={SubmitButton}
                        />
                    ) : (
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => setShowForm(true)}
                        >
                            Add new VDI
                        </Button>
                    )
            }
        </Paper>
    );
};

export default VdiCreate;
