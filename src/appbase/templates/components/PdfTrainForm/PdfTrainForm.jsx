import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { reduxForm } from 'redux-form';

import { reduxFormNames } from '../../../../config';
import FormItem from './FormItem';

const useStyles = makeStyles(() => ({
    button: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 46%,rgba(255,255,255,1) 99%,rgba(255,255,255,1) 100%)',
        height: 100,
        zIndex: 1,
        paddingTop: 35,
    },
    form: {
        paddingBottom: 70,
        width: '100%',
    },
}));

const PdfTrainForm = ({
    variables, templateVariablesId, focusVariable, handleSubmit, train, initialValues,
}) => {
    const classes = useStyles();

    return (
        <form onSubmit={handleSubmit(train)} className={classes.form}>
            {templateVariablesId.map((id) => (
                <FormItem
                    key={id}
                    variable={variables[id]}
                    focusVariable={focusVariable}
                    initialVal={initialValues[id]}
                />
            ))}
            <div className={classes.button}>
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    size="small"
                >
                    Submit
                </Button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: reduxFormNames.trainFields,
})(PdfTrainForm);
