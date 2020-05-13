import { Menu, MenuItem } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../../../auth/state/actions';
import { dropdownMenuByRoles } from '../../../../../dictionary';
import MenuItemsMap from './MenuItemsMap';

const MenuDropdown = ({ handleClose, anchorEl, role }) => {
    const dispatch = useDispatch();

    const logOut = () => dispatch(actions.logout());

    return (
        <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            elevation={2}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: 50,
                horizontal: -30,
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <MenuItemsMap arr={dropdownMenuByRoles[role]} role={role} />
            <MenuItem onClick={logOut}>
                Logout
            </MenuItem>
        </Menu>
    );
};

export default withRouter(MenuDropdown);
