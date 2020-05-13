import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { confidenceColor } from '../../../../../utils/confidenceColor';

import ReduxField from './ReduxField';

const useStyles = makeStyles(theme => ({
    percentageLabel: ({ text }) => ({
        color: text,
        position: 'absolute',
        top: 10,
        right: 10,
        fontWeight: 600,
        fontSize: 10,
    }),
}));

const PreviousLayout = ({ variable, currentOptions, setCurrentOptions, manageTabNav, addNewValue, addKeywordMode, focusVariable, accuracy }) => {
    const classes = useStyles({
        text: confidenceColor(accuracy, 'text'),
    });

    return (
        <>
            <span className={classes.percentageLabel}>{Math.round(accuracy)}%</span>
            <Grid
                item
                xs={addKeywordMode ? 5 : 12}
            >
                <ReduxField
                    item={variable}
                    accuracy={accuracy}
                    manageTabNav={manageTabNav}
                    addNewValue={addNewValue}
                    currentOptions={currentOptions}
                    setCurrentOptions={setCurrentOptions}
                    focusVariable={focusVariable}
                />
            </Grid>
        </>
    )
};

export default PreviousLayout;