import { Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Delete from '../../../../../assets/icons/Delete';

const useStyles = makeStyles(theme => ({
    addButtonContainer: {
        marginBottom: 7,
        textAlign: 'right',
    },
    addButton: {
        fontSize: 10,
        minWidth: 'unset'
    },
    keyword: {
        backgroundColor: theme.palette.primary.light,
        padding: '3px 10px',
        fontSize: 10,
        marginRight: 10,
        marginBottom: 10,
        display: 'inline-block',
        textTransform: 'uppercase',
        fontWeight: 500,
    },
    delete: {
        marginLeft: 5,
        cursor: 'pointer'
    }
}));

const Keywords = ({ keywords, removeKeyword, setAddKeywordMode }) => {
    const classes = useStyles();

    const openKeywordEditor = () => {
        setAddKeywordMode(true);
    };

    if (!keywords.length) {
        return (
            <Grid item xs={2} className={classes.addButtonContainer}>
                <Button
                    size="small"
                    color="primary"
                    className={classes.addButton}
                    onClick={openKeywordEditor}
                >
                    Add keyword
                </Button>
            </Grid>
        )
    }

    return (
        <Grid container>
            <Grid item xs={10}>
                {
                    keywords.map((word, i) => (
                        <span
                            className={classes.keyword}
                            key={i}
                        >
                        {word}
                            <Delete
                                title="delete"
                                fill="lightgrey"
                                className={classes.delete}
                                onClick={() => removeKeyword(i)}
                            />
                    </span>
                    ))
                }
            </Grid>
            <Grid item xs={2} className={classes.addButtonContainer}>
                <Button
                    size="small"
                    color="primary"
                    className={classes.addButton}
                    onClick={openKeywordEditor}
                >
                    Add keyword
                </Button>
            </Grid>
        </Grid>
    )
};

export default Keywords;