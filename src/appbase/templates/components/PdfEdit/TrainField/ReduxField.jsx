import { Fab, Grid, makeStyles, MenuItem } from '@material-ui/core';
import React, { useState } from 'react';
import { Field } from 'redux-form';

import Delete from '../../../../../assets/icons/Delete';
import { confidenceColor } from '../../../../../utils/confidenceColor';
import RenderSelectField from '../../../../_common/RenderSelectField';
import RenderTextField from '../../../../_common/RenderTextField';
import NewOptionInput from './NewOptionInput';


const useStyles = makeStyles(theme => ({
    input: ({ text, backgroundHover, background }) => ({
        padding: 20,
        backgroundColor: background,
        width: '100%',
        ...theme.typography.body1,
        border: 'none !important',
        lineHeight: 1.2,
        boxShadow: 'none',
        '&:hover': {
            boxShadow: 'none',
            backgroundColor: backgroundHover,
        },
        '& input, & [class*="input"]': {
            padding: 0,
            color: text,
            fontWeight: 500,
        },
    }),
    menuDropdown: {
        padding: 0,
    },
    menuOption: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    newOption: {
        borderTop: `1px solid ${theme.palette.grey.A100}`,
        paddingTop: 10,
        '& input': {
            fontSize: 14,
        }
    },
    selectClass: {
        '& button': {
            display: 'none',
        }
    },
    delete: {
        minHeight: 19,
        height: 19,
        width: 19,
    }
}));

const ReduxField = ({
    item,
    manageTabNav,
    addNewValue,
    currentOptions,
    setCurrentOptions,
    className,
    focusVariable,
    accuracy,
}) => {
    const classes = useStyles({
        background: accuracy ? confidenceColor(accuracy) : '#eee',
        backgroundHover: accuracy ? confidenceColor(accuracy, 'bgHover') : '#ddd',
        text: accuracy ? confidenceColor(accuracy, 'text') : 'black',
        // background: '#eee',
        // backgroundHover: '#ddd',
        // text: 'black',
    });

    const [isOpened, setOpened] = useState({});

    const handleSelectChange = (value) => {
        if (value === 'newOption') {
            setOpened({ open: true });
        } else {
            setOpened({});
        }
    };

    const removeOption = (i) => {
        const newArr = [...currentOptions];
        newArr.splice(i, 1);
        setCurrentOptions(newArr);
    };

    return (
        <>
            <Field
                name={item.id+'.page_num'}
                component="input"
                type="hidden"
            />
            <Field
                name={item.id+'.region'}
                component="input"
                type="hidden"
            />
            <Field
                name={item.id+'.text'}
                item={item}
                className={`${classes.input} ${className}`}
                onKeyDown={manageTabNav}
                onFocus={() => focusVariable(item.id)}
                onBlur={addNewValue}
                onExit={handleSelectChange}
                onChange={handleSelectChange}
                menuClassList={classes.menuDropdown}
                selectClass={classes.selectClass}
                open={isOpened}
                component={
                    currentOptions && currentOptions.length > 0
                        ? RenderSelectField
                        : RenderTextField
                }
            >
                {
                    currentOptions && currentOptions.length > 0
                        ? currentOptions.map((option, i) => (
                            <MenuItem
                                value={option}
                                key={i}
                                className={classes.menuOption}
                            >
                                {option}
                                <Fab
                                    size="small"
                                    title="Delete"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeOption(i);
                                    }}
                                    className={classes.delete}
                                >
                                    <Delete
                                        title="delete"
                                        fill="lightgrey"
                                    />
                                </Fab>

                            </MenuItem>
                        ))
                        : null
                }
                <MenuItem value="newOption" className={classes.newOption}>
                    <NewOptionInput setCurrentOptions={setCurrentOptions} />
                </MenuItem>
            </Field>
        </>
    )
};

export default ReduxField;