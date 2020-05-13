import {
    Button, Grid, makeStyles, Typography,
} from '@material-ui/core';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { reduxFormNames } from '../../../../config';
import RenderField from '../../../_common/RenderTextFieldBordered';
import RequestInfo from '../../../_common/RequestInfo';
import validate from '../../validate';
import fields from './fields';


const useStyles = makeStyles(() => ({
    right: {
        minHeight: '100vh',
    },
    form: {
        width: 500,
        textAlign: 'left',
        position: 'relative',
    },
    info: {
        position: 'absolute',
        bottom: 15,
        width: '100%',
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
        marginBottom: 60,
    },
}));

const ContactForm = ({
    handleSubmit, contactError, contactSent, contactLoading, pristine, invalid, submitting,
}) => {
    const classes = useStyles();

    return (
        <Grid
            container
            component="div"
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.right}
        >
            <div className="transitionContainer">
                <Typography
                    component="h1"
                    className="primaryHeading"
                >
                    Contact Us
                </Typography>
                <Grid
                    container
                    component="form"
                    direction="column"
                    alignItems="center"
                    className={classes.form}
                    onSubmit={handleSubmit}
                >
                    {fields.map((field) => (
                        <Field
                            key={field.id}
                            {...field}
                            component={RenderField}
                        />
                    ))}
                    <Button
                        color="primary"
                        type="submit"
                        variant="contained"
                        className={classes.button}
                        size="large"
                        disabled={invalid || submitting || pristine}
                    >
                        Submit
                    </Button>
                    <RequestInfo
                        pt={2}
                        className={classes.info}
                        loading={contactLoading}
                        ok={contactSent}
                        fail={contactError}
                    />
                </Grid>
            </div>
        </Grid>
    );
};

export default reduxForm({
    form: reduxFormNames.contact,
    validate,
})(ContactForm);
