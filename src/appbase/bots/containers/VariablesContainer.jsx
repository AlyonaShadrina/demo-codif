import keyBy from 'lodash/fp/keyBy';
import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import { compose } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';

import reduceVariableValueToArr from '../../../utils/reduceVariableValueToArr';
import withDict from '../../../hocs/withDict';
import Variables from '../components/Variables';
import AddBtn from '../components/Variables/AddBtn';
import * as actions from '../state/actions';
import * as selectors from '../state/selectors';


const VariablesContainer = ({
    isUser, botStatusNotEditable, match, variables_types,
}) => {
    const dispatch = useDispatch();

    const { userId } = match.params;
    const botId = match.params.id;

    const bot = useSelector(selectors.bot(botId));

    const deleteVariable = (varId) => {
        dispatch(actions.deleteVariable({ user_id: userId, bot_id: botId, variable_id: varId }));
        dispatch(actions.getVariables({ user_id: userId, bot_id: botId }));
    };

    const [newVariables, setNewVariables] = useState([]);

    const handleAddNewVaribale = (variable) => {
        setNewVariables((oldArr) => [...oldArr, variable]);
    };

    const deleteNewVariable = (index) => {
        setNewVariables((oldArr) => {
            oldArr.splice(index, 1);
            return [...oldArr];
        });
    };

    const updateVariable = (values) => {
        dispatch(actions.updateVariable({
            user_id: userId,
            bot_id: botId,
            variable_id: values.id,
            values: {
                label: values.label,
                values: reduceVariableValueToArr(values),
                type_id: values.type_id,
            },
        }));
    };

    const createVariable = (values, i) => {
        dispatch(actions.createVariable({
            user_id: userId,
            bot_id: botId,
            values: {
                label: values.label,
                values: reduceVariableValueToArr(values),
                type_id: values.type_id,
            },
            successCallback: () => deleteNewVariable(i),
        }));
    };

    if (!bot || !variables_types) {
        return null;
    }

    const variablesTypesById = keyBy('id', variables_types);

    return (
        <Paper style={{ position: 'relative' }}>
            {
                !isUser && (
                    <AddBtn
                        handleAddNewVariable={handleAddNewVaribale}
                        types={variables_types}
                        disabled={botStatusNotEditable}
                    />
                )
            }
            <Variables
                variables={bot.variables}
                updateVariable={updateVariable}
                createVariable={createVariable}
                deleteVariable={deleteVariable}
                deleteNewVariable={deleteNewVariable}
                newVariables={newVariables}
                variablesTypesById={variablesTypesById}
                botStatusNotEditable={botStatusNotEditable}
                isUser={isUser}
            />
        </Paper>
    );
};

export default compose(
    withDict,
    withRouter,
)(VariablesContainer);
