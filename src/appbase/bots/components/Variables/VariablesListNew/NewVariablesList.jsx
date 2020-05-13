import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import NewVariableItem from './NewVariableItem';


const useStyles = makeStyles((theme) => ({
    container: {
        marginBottom: theme.spacing(3),
    },
}));

const NewVariablesList = ({
    variables, variableProps, deleteVariable,
}) => {
    const classes = useStyles();

    if (!variables || variables.length === 0) {
        return null;
    }

    return (
        <Grid
            container
            spacing={3}
            className={classes.container}
        >
            {/* <Grid item xs={12}> */}
            {/*    <Typography variant="body2"> */}
            {/*        Unsaved variables */}
            {/*    </Typography> */}
            {/* </Grid> */}
            {
                variables.map((variable, i) => (
                    <NewVariableItem
                        variableProps={variableProps}
                        variable={variable}
                        deleteVariable={deleteVariable}
                        i={i}
                        key={variable.id}
                    />
                ))
            }
        </Grid>
    );
};

export default NewVariablesList;
