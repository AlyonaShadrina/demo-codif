import { Grid, InputBase, makeStyles } from '@material-ui/core';
import React from 'react';

import { confidenceColor } from '../../../../../utils/confidenceColor';
import ReduxField from './ReduxField';


const useStyles = makeStyles(theme => ({
    editedWrap: {
        marginTop: 0,
        marginBottom: 0,
    },
    present: ({ text }) => ({
        color: text,
        position: 'relative',

    }),
    previous: {
        color: theme.palette.text.primary,
        position: 'relative',
    },
    label: {
        color: 'inherit',
        position: 'absolute',
        fontWeight: 600,
        top: 15,
        left: 25,
        fontSize: 10,
    },
    percentageLabel: ({ text }) => ({
        color: text,
        position: 'absolute',
        top: 10,
        right: 10,
        fontWeight: 600,
        fontSize: 10,
    }),
    input: ({ background }) => ({
        padding: '30px 20px 10px',
        backgroundColor: background,
        width: '100%',
        ...theme.typography.body1,
        border: 'none !important',
        lineHeight: 1.2,
        '& input': {
            padding: 0,
            color: 'inherit',
            fontWeight: 500,
        },
        '& input[disabled]': {
            color: theme.palette.text.primary,
        },
    }),
    percentsContainer: ({ background }) => ({
        backgroundColor: background,
        width: '100%',
        height: '100%',
    }),
    inputPadding: {
        padding: '30px 20px 10px',
    },
}));



const PresentPreviousLayout = ({
    variable, currentOptions, setCurrentOptions, manageTabNav, addNewValue, focusVariable, accuracy, initialVal, trainedVal
}) => {
    const classes = useStyles({
        background: confidenceColor(accuracy),
        backgroundHover: confidenceColor(accuracy, 'bgHover'),
        text: confidenceColor(accuracy, 'text'),
    });

    return (
        <Grid
            container
            spacing={1}
            className={classes.editedWrap}
        >
            <Grid
                item
                xs={5}
                className={classes.present}
            >
                <span className={classes.label}>Present</span>
                <ReduxField
                    item={variable}
                    manageTabNav={manageTabNav}
                    addNewValue={addNewValue}
                    currentOptions={currentOptions}
                    setCurrentOptions={setCurrentOptions}
                    className={classes.inputPadding}
                    accuracy={accuracy}
                    focusVariable={focusVariable}
                />
            </Grid>
            <Grid
                item
                xs={5}
                className={classes.previous}
            >
                <span className={classes.label}>Previous</span>
                <InputBase
                    value={trainedVal.text}
                    className={classes.input}
                    disabled
                />
            </Grid>
            <Grid
                item
                xs={2}
            >
                <div className={classes.percentsContainer}>
                    <span className={classes.percentageLabel}>{accuracy}%</span>
                </div>
            </Grid>
        </Grid>
    )
};

export default PresentPreviousLayout;