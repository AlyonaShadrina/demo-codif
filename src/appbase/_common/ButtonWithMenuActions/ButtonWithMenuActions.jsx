import {
    Menu, MenuItem, Fab, makeStyles, ListItemIcon,
} from '@material-ui/core';
import React, { useState } from 'react';

import ActionConfirmButton from '../ActionConfirmButton';
import MoreHoriz from '../../../assets/icons/MoreHoriz';
import RouterStyledLink from '../RouterStyledLink';


const useStyles = makeStyles((theme) => ({
    itemLink: {
        color: theme.palette.text.primary,
        '&:hover': {
            textDecoration: 'none',
        },
    },
    item: {
        '&:hover': {
            color: theme.palette.primary.main,
        },
    },
    delete: {
        '&:hover': {
            backgroundColor: theme.palette.error.light,
            color: theme.palette.error.main,
        },
    },
}));

const MoreButton = (props) => (
    <Fab size="small" {...props}>
        <MoreHoriz />
    </Fab>
);

const ButtonWithMenuActions = ({ actionItems, OpenButton = MoreButton, className }) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleItemClick = (actionEvent) => () => {
        if (actionEvent) {
            actionEvent();
        }
        handleClose();
    };

    return (
        <span className={className}>
            <OpenButton onClick={handleClick} />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    actionItems.map((action, i) => {
                        if (action.confirm) {
                            return (
                                <ActionConfirmButton
                                    key={i}
                                    modalTitle={action.confirm.title}
                                    modalText={action.confirm.text}
                                    action={action.onClick}
                                >
                                    {(open) => (
                                        <MenuItem
                                            size="small"
                                            onClick={open}
                                            className={`${classes.item} ${classes.delete}`}
                                            disabled={action.disabled}
                                        >
                                            {action.text}
                                        </MenuItem>
                                    )}
                                </ActionConfirmButton>
                            );
                        }

                        if (action.link) {
                            return (
                                <RouterStyledLink
                                    to={action.link}
                                    className={classes.itemLink}
                                    key={i}
                                >
                                    <MenuItem
                                        size="small"
                                        className={classes.item}
                                        disabled={action.disabled}
                                    >
                                        {action.text}
                                    </MenuItem>
                                </RouterStyledLink>
                            );
                        }

                        return (
                            <MenuItem
                                key={i}
                                size="small"
                                onClick={handleItemClick(action.onClick)}
                                className={classes.item}
                                disabled={action.disabled}
                            >
                                {action.icon && (
                                    <ListItemIcon>
                                        {action.icon}
                                    </ListItemIcon>
                                )}
                                {action.text}
                            </MenuItem>
                        );
                    })
                }
            </Menu>
        </span>
    );
};

export default ButtonWithMenuActions;
