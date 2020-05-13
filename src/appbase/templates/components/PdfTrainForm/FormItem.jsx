import {
    Box, InputBase, Typography, Grid, makeStyles,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Field } from 'redux-form';

import { confidenceColor } from '../../../../utils/confidenceColor';


const useStyles = makeStyles((theme) => ({
    input: ({ text, backgroundHover, background }) => ({
        padding: theme.spacing(2),
        height: 60,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: background,
        fontWeight: 500,
        '&:hover': {
            // backgroundColor: backgroundHover,
        },
        '& input, & [class*="input"]': {
            color: text,
        },
    }),
    previous: ({ text, backgroundHover, background }) => ({
        padding: theme.spacing(2),
        height: 60,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: background,
        fontWeight: 500,
        '&:hover': {
            // backgroundColor: backgroundHover,
        },
        '& input, & [class*="input"]': {
            color: text,
        },
    }),
    accuracy: ({ text, backgroundHover, background }) => ({
        padding: theme.spacing(1),
        backgroundColor: background,
        height: '100%',
        color: text,
        fontWeight: 600,
        fontSize: 10,
        textAlign: 'right',
    }),
}));

const RenderTextField = ({ input, meta: { dirty }, initialVal }) => {
    const accuracy = initialVal ? initialVal.accuracy : null;

    const classes = useStyles(accuracy ? {
        background: confidenceColor(accuracy),
        backgroundHover: confidenceColor(accuracy, 'bgHover'),
        text: confidenceColor(accuracy, 'text'),
    } : {
        background: '#eee',
        backgroundHover: '#ddd',
        text: 'black',
    });

    const [showPrevious, setShowPrevious] = useState(false);

    useEffect(() => {
        if (initialVal && dirty && Object.keys(initialVal).length > 0) {
            setShowPrevious(true);
        }
    }, [dirty]);

    return (
        <Grid container spacing={showPrevious ? 1 : 0}>
            <Grid item xs={showPrevious ? 5 : 11}>
                <div className={classes.input}>
                    <InputBase {...input} />
                </div>
            </Grid>
            {showPrevious && (
                <Grid item xs={5}>
                    <div className={classes.previous}>
                        <InputBase value={initialVal.text} onChange={null} />
                    </div>
                </Grid>
            )}
            <Grid item xs={showPrevious ? 2 : 1}>
                <div className={classes.accuracy}>
                    {accuracy && `${Math.round(accuracy)}%`}
                </div>
            </Grid>
        </Grid>
    );
};

const FormItem = ({ variable, focusVariable, initialVal }) => {
    const { name, type } = variable;

    return (
        <Box m={2}>
            <Typography variant="overline">
                {name}
            </Typography>
            <Field
                name={`${variable.id}.page_num`}
                component="input"
                type="hidden"
            />
            <Field
                name={`${variable.id}.region`}
                component="input"
                type="hidden"
            />
            <Field
                name={`${variable.id}.text`}
                component={RenderTextField}
                type="text"
                onFocus={() => focusVariable(variable.id)}
                initialVal={initialVal}
            />
        </Box>
    );
};

export default FormItem;
