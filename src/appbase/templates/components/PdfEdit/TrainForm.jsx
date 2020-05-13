import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { reduxForm } from 'redux-form';

import { reduxFormNames } from '../../../../config';
import TrainField from './TrainField';


const useStyles = makeStyles(() => ({
    form: {
        paddingTop: 20,
        width: '100%',
    },
    submitContainer: {
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        width: '100%',
        height: 100,
        backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 46%,rgba(255,255,255,1) 99%,rgba(255,255,255,1) 100%)',
        textAlign: 'center',
        paddingTop: 35,
        '& button:hover': {
            backgroundColor: 'transparent',
        },
    },
}));

/**
 * Component shows fields for editing and submit button.
 *
 * @param {function} submitAction - currentle is always 'train' that gets form values
 * @param {Array} templateVariablesId - ids of current template
 * @param {Object} variables - list of variables by id
 * @param {function} focusVariable - get id as argument
 */

const TrainForm = ({
    submitAction, templateVariablesId, variables, focusVariable, handleSubmit, initialValues, trained,
}) => {
    const classes = useStyles();

    return (
        <form
            className={classes.form}
            onSubmit={handleSubmit(submitAction)}
        >
            {
                templateVariablesId.map((id) => (
                    <TrainField
                        accuracy={Object.keys(initialValues).length > 0 && initialValues[id] ? initialValues[id].accuracy : null}
                        variable={variables[id]}
                        key={id}
                        focusVariable={focusVariable}
                        initialVal={initialValues[id]}
                        trainedVal={trained[id]}
                    />
                ))
            }
            <div className={classes.submitContainer}>
                <Button size="small" type="submit" variant="outlined" color="primary">
                    Submit
                </Button>
            </div>
        </form>
    );
};


export default reduxForm({
    form: reduxFormNames.trainFields,
    enableReinitialize: true,
})(TrainForm);
