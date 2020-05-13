import React from 'react';
import {
    Typography, Fab, Grid, Input, NativeSelect, makeStyles,
} from '@material-ui/core';

import Delete from '../../../../assets/icons/Delete';
import ActionConfirmButton from '../../../_common/ActionConfirmButton';


const useStyles = makeStyles(() => ({
    delete: {
        marginBottom: 3,
    },
}));

const VariableList = ({
    variables, template, deleteVariable, variablesTypes, editVariable,
}) => {
    const classes = useStyles();

    const handleBlur = (id) => (e) => (
        editVariable({
            values: { name: e.target.value, template_id: template.id },
            varId: id,
        })
    );

    const handleChange = (id) => (e) => (
        editVariable({
            values: { type_id: parseInt(e.target.value), template_id: template.id },
            varId: id,
        })
    );

    const handleDelete = (id) => () => (
        deleteVariable(id)
    );

    return (
        <Grid container spacing={4}>
            {
                template.variables.map((id) => (
                    <Grid item xs={12} md={6} mb={2} key={id}>
                        <Grid container spacing={2} alignItems="flex-end">
                            <Grid item xs={12} md={5}>
                                <Typography variant="overline">
                                        variable name
                                </Typography>
                                <Input
                                    type="text"
                                    name="name"
                                    defaultValue={variables[id].name}
                                    disableUnderline
                                    onBlur={handleBlur(id)}
                                />
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Typography variant="overline">
                                        variable type
                                </Typography>
                                <NativeSelect
                                    name="type_id"
                                    defaultValue={variables[id].type}
                                    disableUnderline
                                    onChange={handleChange(id)}
                                >
                                    {variablesTypes.map((variable) => (
                                        <option key={variable.id} value={variable.id}>
                                            {variable.type_name}
                                        </option>
                                    ))}
                                </NativeSelect>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <ActionConfirmButton
                                    modalTitle="Are you sure you want to delete this variable?"
                                    modalText="This action is irreversible."
                                    action={handleDelete(id)}
                                >
                                    { (open) => (
                                        <Fab
                                            size="small"
                                            onClick={open}
                                            className={classes.delete}
                                        >
                                            <Delete
                                                title="delete"
                                                fill="lightgrey"
                                            />
                                        </Fab>

                                    )}
                                </ActionConfirmButton>
                            </Grid>
                        </Grid>
                    </Grid>
                ))
            }
        </Grid>
    );
};

export default VariableList;
