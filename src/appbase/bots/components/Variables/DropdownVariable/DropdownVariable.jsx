import { List, ListItem, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Field } from 'redux-form';

import NewOptionInput from './NewOptionInput';
import OptionInput from './OptionInput';
import RenderSelectField from './RenderSelectField';


const useStyles = makeStyles(() => ({
    input: {
        fontSize: 14,
    },
}));

const DropdownVariable = ({
    botStatusNotEditable,
    options,
    change,
    endAdornment,
}) => {
    const classes = useStyles();

    const [currentOptions, setCurrentOptions] = useState(options);

    const handleExit = () => {
        change('values', currentOptions);
    };

    useEffect(() => {
        change('values', currentOptions);
    }, [currentOptions]);


    const removeOption = (i) => {
        const newArr = [...currentOptions];
        newArr.splice(i, 1);
        setCurrentOptions(newArr);
    };

    return (
        <Field
            name="values"
            onExit={handleExit}
            component={RenderSelectField}
            endAdornment={endAdornment}
            options={currentOptions}
        >
            <List>
                {
                    currentOptions && currentOptions.length > 0
                        ? currentOptions.map((option, i) => (
                            <OptionInput
                                key={i + option}
                                i={i}
                                option={option}
                                setCurrentOptions={setCurrentOptions}
                                botStatusNotEditable={botStatusNotEditable}
                                removeOption={removeOption}
                            />
                        ))
                        : null
                }
                {
                    !botStatusNotEditable && (
                        <ListItem>
                            <NewOptionInput
                                setCurrentOptions={setCurrentOptions}
                                className={classes.input}
                            />
                        </ListItem>
                    )
                }
            </List>
        </Field>
    );
};

export default DropdownVariable;
