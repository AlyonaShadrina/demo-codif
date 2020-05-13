import { makeStyles, Typography } from '@material-ui/core';
import filter from 'lodash/fp/filter';
import React from 'react';

import NewVariablesList from './VariablesListNew';
import VariablesList from './VariablesList';


const useStyles = makeStyles(() => ({
    title: {
        marginBottom: 30,
    },
}));

/**
 * Component shows already existing variables and temporary fields for variable creation.
 *
 * @param {function} updateVariable
 * @param {function} createVariable
 * @param {function} deleteVariable
 * @param {function} deleteNewVariable
 * @param {Array} variables - already existing variables from API
 * @param {Array} newVariables - temporary fields from store
 * @param {Object} variablesTypesById - need to display icon and label for each form
 * @param {boolean} botStatusNotEditable - depends on status
 * @param {boolean} isUser - depends on role
 */

const Variables = ({
    updateVariable,
    createVariable,
    deleteVariable,
    deleteNewVariable,
    variables,
    newVariables,
    variablesTypesById,
    botStatusNotEditable,
    isUser,
}) => {
    const classes = useStyles();

    const variableProps = {
        updateVariable,
        createVariable,
        variablesTypesById,
        botStatusNotEditable,
        isUser,
    };

    const date = filter((o) => o.type_id === 3, variables);
    const text = filter((o) => o.type_id === 1, variables);
    const number = filter((o) => o.type_id === 2, variables);
    const dropdown = filter((o) => o.type_id === 4, variables);

    const filteredVariables = [date, text, number, dropdown];

    return (
        <>
            <Typography
                variant="caption"
                className={classes.title}
                display="block"
                component="div"
            >
                Define fields for data output
            </Typography>
            {filteredVariables.map((filteredVar, i) => (
                <VariablesList
                    key={i}
                    variables={filteredVar}
                    isUser={isUser}
                    variableProps={variableProps}
                    deleteVariable={deleteVariable}
                />
            ))}
            <NewVariablesList
                variables={newVariables}
                isUser={isUser}
                variableProps={variableProps}
                deleteVariable={deleteNewVariable}
            />
        </>
    );
};

export default Variables;
