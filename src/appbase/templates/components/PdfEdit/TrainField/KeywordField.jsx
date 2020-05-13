import { Fab, Grid, InputBase, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Delete from '../../../../../assets/icons/Delete';

const useStyles = makeStyles(theme => ({
    inputKeyword: {
        padding: 19,
        maxWidth: '100%',
        width: 1000,
        ...theme.typography.body1,
        '& input': {
            padding: 0,
            fontWeight: 500,
        },
    },
    buttonContainer: {
        textAlign: 'right',
    }
}));

const KeywordField = ({ addNewKeyword, setAddKeywordMode, refProp }) => {
    const classes = useStyles();

    const [value, setValue] = useState('');

    const handleKeydown = (e) => {
        addNewKeyword(e);
        if (e.key === 'Enter') {
            setValue('');
        }
    };

    return (
        <Grid
            container
            className={`bordered`}
            alignItems="center"
        >
            <Grid
                item
                xs={10}
            >
                <InputBase
                    name=""
                    className={classes.inputKeyword}
                    type="text"
                    ref={refProp}
                    onKeyDown={handleKeydown}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </Grid>
            <Grid
                item
                xs={2}
                className={classes.buttonContainer}
            >
                <Fab
                    size="small"
                    title="Delete"
                    onClick={() => setAddKeywordMode(false)}
                >
                    <Delete
                        title="delete"
                        fill="primary"
                    />
                </Fab>

            </Grid>
        </Grid>
    )
};

export default KeywordField;