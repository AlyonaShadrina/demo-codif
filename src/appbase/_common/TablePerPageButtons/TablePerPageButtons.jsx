import React from 'react';
import {
    Button, Grid, makeStyles, Typography,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container: {
        padding: '30px 30px 10px',
    },
    btn: {
        height: 40,
        width: 40,
        fontSize: 16,
        fontWeight: 'normal',
        minWidth: 'unset',
        borderRadius: 0,
        marginLeft: 12,
    },
    inactiveBtn: {
        color: theme.palette.text.secondary,
    },
}));

const TablePerPageButtons = ({ text, perPage, makeRequest }) => {
    const classes = useStyles();

    const handleClick = (e) => makeRequest({ 'page[size]': parseInt(e.currentTarget.innerText) });

    return (
        <Grid container className={classes.container}>
            <Grid item xs={6}>
                <Typography variant="caption">
                    {text}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Grid container justify="flex-end" alignItems="baseline">
                    Show
                    {
                        [20, 50, 100].map((num, i) => (
                            <Button
                                variant={parseInt(perPage) === parseInt(num) ? 'outlined' : 'text'}
                                className={classes.btn}
                                onClick={handleClick}
                                key={i}
                                classes={{
                                    text: classes.inactiveBtn,
                                }}
                            >
                                {num}
                            </Button>
                        ))
                    }
                </Grid>

            </Grid>
        </Grid>
    );
};

export default TablePerPageButtons;
