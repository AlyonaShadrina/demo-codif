import React from 'react';

import { makeStyles } from '@material-ui/core';
import MenuItemWithSublist from './MenuItemWithSublist';
import MenuItemLink from './MenuItemLink';
import colors from '../../../../../styles/colors';

const useStyles = makeStyles((theme) => ({
    container: {
        cursor: 'pointer',
    },
    avatar: {
        width: 40,
        marginRight: 10,
    },
    menuItem: {
        width: 250,
        display: 'flex',
        justifyContent: 'space-between',
        padding: 0,
    },
    menuItemLink: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
        width: '100%',
        padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '&:hover': {
            textDecoration: 'none',
        },
    },
    menuItemChild: {
        paddingLeft: 30 + 15,
    },
    isSelectedMenuItem: {
        position: 'relative',
        '&::before': {
            content: "' '",
            width: 6,
            height: 6,
            borderRadius: '100%',
            backgroundColor: colors.primary,
            display: 'inline-block',
            verticalAlign: 'middle',
            marginRight: 10,
            position: 'absolute',
            top: 16,
            left: 14,
        },
    },
    hasSelectedMenuItem: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '&:before': {
            content: "' '",
            width: 6,
            height: 6,
            borderRadius: '100%',
            border: `1px solid ${theme.palette.primary.main}`,
            display: 'inline-block',
            verticalAlign: 'middle',
            marginRight: 10,
            position: 'absolute',
            top: 16,
            left: 14,
        },
    },
    subList: {
        '& li a': {
            paddingLeft: theme.spacing(6),
        },
        '& li a::before': {
            left: 30,
        },
    },
}));

// there was a error in console without React.forwardRef and ref argument
const MenuItemsMap = React.forwardRef(({ arr, role }, ref) => {
    const classes = useStyles();

    return arr.map((item, i) => {
        if (item.text !== 'Add / Edit') {
            return <MenuItemLink key={i} item={item} classes={classes} />;
        }
        return <MenuItemWithSublist key={i} item={item} role={role} classes={classes} />;
    });
});

export default MenuItemsMap;
