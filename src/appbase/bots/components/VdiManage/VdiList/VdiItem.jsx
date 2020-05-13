import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

import VdiForm from '../VdiForm';
import SelectionField from './SelectionField';


const useStyles = makeStyles((theme) => ({
    container: {
        padding: 0,
        marginBottom: 40,
    },
    VdiInfo: {
        padding: 30,
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
}));

const VdiItem = ({
    bot,
    vdi,
    updateBotVdiId,
    updateVdi,
    deleteVdi,
    botStatusNotEditable,
    isUser,
}) => {
    const classes = useStyles();

    const handleSelect = () => {
        if (!botStatusNotEditable) {
            updateBotVdiId(vdi.id);
        }
    };

    const handleUpdate = (values) => {
        updateVdi(values);
    };

    return (
        <Paper className={classes.container}>
            <Grid container alignContent="center">
                <Grid item xs={1}>
                    <SelectionField
                        handleSelect={handleSelect}
                        isSelected={bot.vdi && bot.vdi.id === vdi.id}
                        disabled={botStatusNotEditable}
                    />
                </Grid>
                <Grid item xs={11} className={classes.VdiInfo}>
                    <VdiForm
                        key={vdi.id}
                        form={`vdi-${vdi.id}`}
                        initialValues={vdi}
                        vdi={vdi}
                        deleteVdi={deleteVdi}
                        onVdiSubmit={handleUpdate}
                        isUser={isUser}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default VdiItem;
