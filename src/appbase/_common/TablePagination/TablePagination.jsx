import { Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import PageButtons from './PageButtons';


const useStyles = makeStyles((theme) => ({
    container: {
        padding: '20px 30px',
    },
    prevBtn: {
        paddingRight: 83,
        marginRight: 30,
        '&:hover': {
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
        },
    },
    nextBtn: {
        paddingLeft: 115,
        '&:hover': {
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
        },
    },
}));

const TablePagination = ({ pagination = {}, makeRequest }) => {
    const classes = useStyles();

    const { total_pages, current_page } = pagination;

    if (total_pages === 1) {
        return null;
    }

    const requestNextPage = () => {
        makeRequest({ 'page[number]': current_page + 1 });
    };

    const requestPrevPage = () => {
        makeRequest({ 'page[number]': current_page - 1 });
    };

    return (
        <Grid container className={classes.container}>
            <Grid item xs={6}>
                <PageButtons
                    total={total_pages}
                    current={current_page}
                    makeRequest={makeRequest}
                />
            </Grid>
            <Grid item xs={6}>
                <Grid container justify="flex-end">
                    <Button
                        variant="outlined"
                        className={classes.prevBtn}
                        disabled={current_page - 1 === 0}
                        onClick={requestPrevPage}
                    >
                        Previous page
                    </Button>
                    <Button
                        variant="outlined"
                        className={classes.nextBtn}
                        disabled={total_pages === current_page}
                        onClick={requestNextPage}
                    >
                        Next page
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TablePagination;
