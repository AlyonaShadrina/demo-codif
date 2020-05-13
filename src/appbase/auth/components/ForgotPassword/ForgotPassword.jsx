import {
    Box, Button, Collapse, Grid, makeStyles,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';

import { reduxFormNames } from '../../../../config';
import RequestInfo from '../../../_common/RequestInfo';
import validate from '../../validate';
import RenderField from './RenderField';


const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: '100%',
        width: 500,
        margin: 'auto',
    },
    link: {
        color: theme.palette.text.primary,
        paddingBottom: 5,
        borderBottom: `1px solid ${theme.palette.grey.A200}`,
        cursor: 'pointer',
    },
    form: {
        textAlign: 'left',
        position: 'relative',
    },
    button: {
        width: '100%',
    },
    info: {
        position: 'absolute',
        width: '100%',
        bottom: -35,
        textAlign: 'center',
    },
}));

const ForgotPassword = ({
    handleSubmit, forgotLoading, forgotSent, forgotError, invalid, submitting,
}) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const toggleOpen = () => setOpen(!open);
    return (
        <div className={classes.container}>
            <Box mb={2}>
                <span
                    onClick={toggleOpen}
                    className={classes.link}
                >
                    Forgot your password?
                </span>
            </Box>
            <Collapse in={open}>
                <Grid
                    container
                    component="form"
                    alignItems="flex-end"
                    spacing={2}
                    className={classes.form}
                    onSubmit={handleSubmit}
                >
                    <Field
                        name="email"
                        id="email-forgot"
                        type="email"
                        placeholder="Enter your email"
                        component={RenderField}
                    />
                    <Grid item xs={4}>
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            className={classes.button}
                            size="small"
                            disabled={invalid || submitting}
                        >
                            Submit
                        </Button>
                    </Grid>
                    <Grid item xs={12} className={classes.info}>
                        <RequestInfo
                            pt={2}
                            loading={forgotLoading}
                            ok={forgotSent}
                            fail={forgotError}
                        />
                    </Grid>
                </Grid>
            </Collapse>
        </div>
    );
};

export default reduxForm({
    form: reduxFormNames.forgotPassword,
    validate,
})(ForgotPassword);
