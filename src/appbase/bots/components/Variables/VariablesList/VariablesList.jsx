import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import VariableItem from './VariableItem';


const useStyles = makeStyles((theme) => ({
    container: {
        marginBottom: theme.spacing(3),
    },
}));

const VariablesList = ({
    variables, isUser, variableProps, deleteVariable, variables_types,
}) => {
    const classes = useStyles();

    if (!variables || variables.length === 0) {
        return null;
    }

    // const { label } = variables_types.find(type => type.id === variables[0].type_id);

    return (
        <Grid container spacing={3} className={classes.container}>
            {/* <Grid item xs={12}> */}
            {/*    <Typography variant="body2"> */}
            {/*        {label} */}
            {/*    </Typography> */}
            {/* </Grid> */}
            {
                variables.map((variable, i) => (
                    <VariableItem
                        i={i}
                        variable={variable}
                        deleteVariable={deleteVariable}
                        variableProps={variableProps}
                        isUser={isUser}
                        key={variable.id}
                    />
                ))
            }
        </Grid>
    );
};

// export const VariablesList = withDict(List);
export default VariablesList;
