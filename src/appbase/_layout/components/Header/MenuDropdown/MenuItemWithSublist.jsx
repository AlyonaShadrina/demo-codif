import React from "react";
import { Collapse, List, MenuItem } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import ChevronDown from "../../../../../assets/icons/ChevronDown";
import { addEditMenuItems } from "../../../../../dictionary";
import MenuItemsMap from "./MenuItemsMap";


const MenuItemWithSublist = ({ item, role, classes }) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <MenuItem onClick={handleClick} className={classes.menuItem}>
                <NavLink
                    to={item.link}
                    className={classes.menuItemLink}
                    activeClassName={classes.hasSelectedMenuItem}
                    onClick={(e) => e.preventDefault()}
                >
                    {item.text}
                    <ChevronDown/>
                </NavLink>
            </MenuItem>
            <Collapse
                in={open}
                timeout="auto"
                unmountOnExit
            >
                <List component="div" className={classes.subList}>
                    <MenuItemsMap arr={addEditMenuItems[role]} classes={classes} />
                </List>
            </Collapse>
        </>
    )
};

export default MenuItemWithSublist;