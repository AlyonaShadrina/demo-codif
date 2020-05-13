import {
    Button, Fab, makeStyles, TableCell, TableRow, Typography,
} from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import React, { useState } from 'react';

import AddUserIcon from '../../../../../assets/icons/AddUser';
import ChevronDown from '../../../../../assets/icons/ChevronDown';
import Person from '../../../../../assets/icons/Person';
import { userCreationDatetimeFormat } from '../../../../../config';
import { paths } from '../../../../../dictionary';
import formatDateFromUtc from '../../../../../utils/formatDateFromUtc';
import Actions from '../../../../_common/ButtonWithMenuActions';
import ManagersUserList from '../../../containers/ManagersUserListContainer';
import AddUser from '../../AddUser';
import BasicInfo from '../BasicInfo';
import StatusChip from '../StatusChip';
import withManagersForUserCreation from "../../../../../hocs/withManagersForUserCreation";


const AddUserButton = withManagersForUserCreation(AddUser);

const useStyles = makeStyles((theme) => ({
    name: {
        '&:not(:hover)': {
            color: theme.palette.text.primary,
        },
    },
    textRight: {
        textAlign: 'right',
        paddingRight: 15,
    },
    timezone: {
        marginLeft: 2,
        verticalAlign: 'super',
    },
    managerRow: {
        '& td': {
            border: 'none',
        },
    },
    usersButton: {
        cursor: 'pointer',
        minWidth: 'unset',
        marginLeft: theme.spacing(8),
    },
    actionButtons: {
        marginRight: theme.spacing(3),
    },
    buttonText: {
        marginRight: 8,
        marginLeft: 8,
    },
}));

const ManagerRow = ({
    user, updateUser, deleteUser, addUser, managerUsersIds, allUsers,
}) => {
    const classes = useStyles();

    const handleDelete = () => {
        deleteUser(user);
    };

    const handleActivate = () => {
        updateUser(user, { status: 'activated' });
    };

    const handleDeactivate = () => {
        updateUser(user, { status: 'disabled' });
    };

    const userName = `${user.first_name} ${user.last_name}`;

    const actionItems = [
        {
            text: 'Edit',
            link: `${paths.users}/${user.id}${paths.profile}`,
        },
        {
            text: 'Activate',
            onClick: handleActivate,
            disabled: user.status === 'activated',
        },
        {
            text: 'Deactivate',
            onClick: handleDeactivate,
            disabled: user.status === 'disabled',
        },
        {
            text: 'Delete',
            onClick: handleDelete,
            confirm: {
                title: `Are you sure you want to delete ${userName} (${user.email})?`,
                text: 'This action is irreversible.',
            },
        },
    ];

    const [expandUsers, setExpandUsers] = useState(false);

    const showUsers = () => {
        setExpandUsers((val) => !val);
    };

    const AddUserButton = (props) => (
        <Fab
            size="small"
            className={classes.actionButtons}
            {...props}
        >
            <AddUserIcon fill="lightgrey" />
        </Fab>
    );

    return (
        <>
            <TableRow className={classes.managerRow}>
                <TableCell className="maxWidth400">
                    <BasicInfo user={user} />
                </TableCell>
                <TableCell>
                    <StatusChip label={user.status} />
                </TableCell>
                <TableCell>
                    <Typography variant="body2">
                        {formatDateFromUtc(user.created_at, userCreationDatetimeFormat).date}
                        <Typography variant="subtitle1" component="span" className={classes.timezone}>
                            {formatDateFromUtc(user.created_at, userCreationDatetimeFormat).timezone}
                        </Typography>
                    </Typography>
                </TableCell>
                <TableCell className={classes.textRight}>
                    <AddUserButton
                        role="user"
                        addUser={addUser}
                        initialValues={{ role: 'user', manager_id: user.id }}
                        form={`add-user-for-${user.id}`}
                        CustomButton={AddUserButton}
                        managerUsersIds={managerUsersIds}
                        allUsers={allUsers}
                    />
                    <Actions actionItems={actionItems} className={classes.actionButtons} />
                </TableCell>
                <TableCell className={classes.textRight}>
                    <Button onClick={showUsers} className={classes.usersButton}>
                        <Person fill="lightgrey" />
                        <Typography component="span" variant="body2" className={classes.buttonText}>
                            {`${user.manager_users_count} user${user.manager_users_count === 1 ? '' : 's'}`}
                        </Typography>
                        <ChevronDown fill="lightgrey" />
                    </Button>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={5} style={{ padding: 0 }}>
                    <Collapse in={expandUsers}>
                        <ManagersUserList
                            expandUsers={expandUsers}
                            managerId={user.id}
                        />
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
};

export default ManagerRow;
