import { makeStyles, Input } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    search: {
        boxShadow: 'none',
        '&:hover': {
            boxShadow: 'none !important',
        },
        borderLeft: `2px solid ${theme.palette.primary.main}`,
        fontSize: 16,
    },
}));

const Search = ({ onChangeCallback, defaultValue }) => {
    const classes = useStyles();

    const handleChange = (e) => {
        if (onChangeCallback) {
            onChangeCallback(e.currentTarget.value);
        }
    };

    return (
        <Input
            placeholder="Type to search"
            type="search"
            disableUnderline
            className={classes.search}
            onChange={handleChange}
            defaultValue={defaultValue}
        />
    );
};

export default Search;
