import { Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';

import Keywords from './Keywords';
import FieldContainer from './FieldContainer';


const useStyles = makeStyles(theme => ({
    formControl: {
        padding: '0 30px 20px',
        width: '100%',
        position: 'relative',
    },

    addButton: {
        fontSize: 10,
        minWidth: 'unset'
    },
    label: {
        paddingBottom: 5,
        display: 'inline-block',
    },
}));

/**
 * Component shows different field layout.
 *
 * @param {Object} variable - full variable info
 * @param {Object} initialVal - variable info for form that we need to send
 * @param {function} focusVariable - get id as argument
 * @param {number} accuracy
 */

const TrainField = ({ variable, focusVariable, accuracy, initialVal, trainedVal }) => {
    const classes = useStyles();

    const [keywords, setKeywords] = useState(variable.keywords || []);
    const [addKeywordMode, setAddKeywordMode] = useState(false);

    const removeKeyword = (i) => {
        const newArr = [...keywords];
        newArr.splice(i, 1);
        setKeywords(newArr);
    };

    const addNewKeyword = (e) => {
        if (e.key === 'Escape') {
            setAddKeywordMode(false);
        }
        if (e.key === 'Enter' && e.currentTarget.value.length > 0) {
            setKeywords(oldArr => [...oldArr, e.currentTarget.value])
        }
    };

    return (
        <div className={classes.formControl}>
            <Grid container alignItems="flex-end" justify="space-between">
                <Grid item xs={9}>
                    <div>
                        <label
                            htmlFor={variable.name}
                            className={classes.label}
                        >
                            <Typography variant="overline">
                                {variable.name}
                            </Typography>
                        </label>
                    </div>
                </Grid>
                {/*<Keywords*/}
                {/*    removeKeyword={removeKeyword}*/}
                {/*    keywords={keywords}*/}
                {/*    setAddKeywordMode={setAddKeywordMode}*/}
                {/*/>*/}
            </Grid>
            <FieldContainer
                variable={variable}
                accuracy={accuracy}
                addNewKeyword={addNewKeyword}
                addKeywordMode={addKeywordMode}
                setAddKeywordMode={setAddKeywordMode}
                focusVariable={focusVariable}
                initialVal={initialVal}
                trainedVal={trainedVal}
            />
        </div>
    )
};

export default TrainField;