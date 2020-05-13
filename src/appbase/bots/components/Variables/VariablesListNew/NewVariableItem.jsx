import { Collapse, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import VariableForm from '../VariableForm';


const NewVariableItem = ({
    variableProps, variable, deleteVariable, i,
}) => {
    const [visible, setVisible] = useState(true);

    const handleFakeDelete = () => {
        setVisible(false);
    };

    const handleDelete = () => {
        deleteVariable(i);
    };

    return (
        <Collapse
            in={visible}
            onExited={handleDelete}
            component={Grid}
            item
            xs={12}
            md={6}
        >
            <VariableForm
                keyToDel={i}
                form={`variable${variable.id}`}
                initialValues={{ type_id: variable.type_id }}
                deleteVariable={handleFakeDelete}
                {...variableProps}
            />
        </Collapse>
    );
};

export default NewVariableItem;
