import {
    Fab, InputBase, ListItem, makeStyles,
} from '@material-ui/core';
import React from 'react';

import Delete from '../../../../../assets/icons/Delete';


const useStyles = makeStyles(() => ({
    input: {
        fontSize: 14,
    },
}));

const OptionInput = ({
    i, option, setCurrentOptions, botStatusNotEditable, removeOption,
}) => {
    const classes = useStyles();

    return (
        <ListItem
            value={option}
        >
            <InputBase
                type="text"
                className={classes.input}
                onBlur={(e) => {
                    setCurrentOptions((oldArr) => {
                        const newArr = [...oldArr];
                        newArr[i] = e.target.value;
                        return [...newArr];
                    });
                }}
                defaultValue={option}
                disabled={botStatusNotEditable}
            />
            {
                !botStatusNotEditable && (
                    <Fab
                        size="small"
                        title="Delete"
                        onClick={() => {
                            removeOption(i);
                        }}
                    >
                        <Delete
                            title="delete"
                            fill="lightgrey"
                        />
                    </Fab>
                )
            }
        </ListItem>
    );
};

export default OptionInput;
