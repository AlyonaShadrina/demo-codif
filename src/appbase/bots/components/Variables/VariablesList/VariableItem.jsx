import { Grid } from '@material-ui/core';
import React from 'react';
import VariableForm from '../VariableForm';


const VariableItem = ({
    variable, deleteVariable, variableProps, isUser, i,
}) => {
    const handleDelete = () => {
        deleteVariable(variable.id);
    };

    const reduceArrToString = (variable) => {
        const reducedVar = { ...variable };
        const variableValuesArray = reducedVar.values;
        if (Array.isArray(variableValuesArray) && reducedVar.type_id !== 4) {
            reducedVar.values = variableValuesArray.join(',');
        }
        return reducedVar;
    };

    return (
        <Grid
            item
            xs={12}
            md={isUser ? 4 : 6}
        >
            <VariableForm
                keyToDel={i}
                initialValues={reduceArrToString(variable)}
                form={`variable${variable.id}`}
                deleteVariable={handleDelete}
                {...variableProps}
            />
        </Grid>
    );
};

export default VariableItem;
