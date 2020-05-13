import React from "react";
import { MenuItem } from "@material-ui/core";
import { NavLink } from "react-router-dom";


const MenuItemLink = ({ item, classes }) => (
    <MenuItem className={classes.menuItem}>
        <NavLink
            exact
            to={item.link}
            className={classes.menuItemLink}
            activeClassName={classes.isSelectedMenuItem}
        >
            {item.text}
        </NavLink>
    </MenuItem>
);

export default MenuItemLink;