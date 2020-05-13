import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import KeywordField from './KeywordField';
import PresentPreviousLayout from './PresentPreviousLayout';
import PreviousLayout from './PreviousLayout';


const useStyles = makeStyles(theme => ({
    inputWrap: {
        position: 'relative',
        width: '100%',
        overflowX: 'hidden',
    },
    addKeywordContainer: {
        position: 'absolute',
        zIndex: 1,
        background: theme.palette.common.white,
        right: 0,
        transform: 'translateX(100%)',
    },
    showKeywordContainer: {
        transform: 'translateX(0)',
    },
    keywordContainerMargin: {
        marginTop: 4,
    }
}));


const FieldContainer = ({
    variable, addKeywordMode, addNewKeyword, setAddKeywordMode, focusVariable, accuracy, initialVal, trainedVal
}) => {
    const classes = useStyles();

    const [hasNewValue, setHasNewValue] = useState(false);

    const textInput = React.createRef();

    const setFocus = () => {
        textInput.current.querySelector('input').focus();
    };

    const manageTabNav = (e) => {
        // if (e.key === 'Tab') {
        //     setAddKeywordMode(true);
        // }
        // if (e.key === 'Enter' && e.target.value.length > 0) {
        //     if (e.target.value === item.value) {
        //         setHasNewValue(false);
        //         return
        //     }
        //     setHasNewValue(true);
        // }
    };

    const addNewValue = (e) => {
        if (initialVal) {
            console.log('trainedVal', trainedVal);
            console.log('initialVal', initialVal);
            if (e.target.value === trainedVal.text) {
                setHasNewValue(false);
                return
            }
            setHasNewValue(true);
        }
    };

    useEffect(() => {
        if (addKeywordMode) {
            setFocus();
        }
    }, [addKeywordMode]);

    const [currentOptions, setCurrentOptions] = useState(variable.options);

    return (
        <Grid
            container
            className={classes.inputWrap}
        >
            {
                hasNewValue ? (
                    <PresentPreviousLayout
                        variable={variable}
                        initialVal={initialVal}
                        accuracy={accuracy}
                        currentOptions={currentOptions}
                        setCurrentOptions={setCurrentOptions}
                        manageTabNav={manageTabNav}
                        addNewValue={addNewValue}
                        focusVariable={focusVariable}
                        trainedVal={trainedVal}
                    />
                ) : (
                    <PreviousLayout
                        variable={variable}
                        accuracy={accuracy}
                        currentOptions={currentOptions}
                        setCurrentOptions={setCurrentOptions}
                        manageTabNav={manageTabNav}
                        addNewValue={addNewValue}
                        addKeywordMode={addKeywordMode}
                        focusVariable={focusVariable}
                    />
                )
            }
            <Grid
                item
                xs={7}
                className={`
                    ${classes.addKeywordContainer} 
                    ${addKeywordMode && classes.showKeywordContainer} 
                    ${hasNewValue && classes.keywordContainerMargin}
                `}
            >
                <KeywordField
                    addNewKeyword={addNewKeyword}
                    setAddKeywordMode={setAddKeywordMode}
                    refProp={textInput}
                />
            </Grid>
        </Grid>
    )
};

export default FieldContainer;