import {
    Button, Grid, InputBase, makeStyles,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
    fileInput: {
        borderRadius: 31,
        paddingLeft: 15,
        paddingRight: 15,
        width: '95%',
    },
    marginBottom: {
        marginBottom: 25,
    },
}));

const LinkInput = ({ uploadFile }) => {
    const classes = useStyles();

    return (
        <>
            <Grid
                item
                xs={12}
                md={8}
                className={classes.marginBottom}
            >
                <InputBase
                    type="text"
                    className={`${classes.fileInput} bordered`}
                />
            </Grid>
            <Grid
                item
                xs={12}
                md={4}
            >
                <Button
                    variant="outlined"
                    color="primary"
                    type="submit"
                >
                    Paste link
                </Button>
            </Grid>
        </>
    );
};

export default LinkInput;
