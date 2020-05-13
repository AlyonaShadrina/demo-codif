import {
    makeStyles, TableCell, TableRow, Typography,
} from '@material-ui/core';
import React from 'react';

import { userCreationDatetimeFormat } from '../../../../config';
import { paths } from '../../../../dictionary';
import cropText from '../../../../utils/cropText';
import formatDateFromUtc from '../../../../utils/formatDateFromUtc';
import Actions from '../../../_common/ButtonWithMenuActions';
import RouterStyledLink from '../../../_common/RouterStyledLink';
import BasicInfo from './BasicInfo';
import StatusChip from './StatusChip';


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
}));

const UserRow = ({
    user, updateUser, deleteUser, noActions, classNames = {},
}) => {
    const classes = useStyles();

    if (!user) {
        return null;
    }

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

    return (
        <TableRow className={classNames.TableRow}>
            <TableCell className={`maxWidth400 ${classNames.TableRowFirstCell}`}>
                <BasicInfo user={user} />
            </TableCell>
            <TableCell>
                <Typography variant="body2">
                    {formatDateFromUtc(user.created_at, userCreationDatetimeFormat).date}
                    <Typography variant="subtitle1" component="span" className={classes.timezone}>
                        {formatDateFromUtc(user.created_at, userCreationDatetimeFormat).timezone}
                    </Typography>
                </Typography>
            </TableCell>
            <TableCell className="maxWidth400">
                <RouterStyledLink
                    to={`${paths.users}/${user.manager.id}${paths.bots}`}
                    className={classes.name}
                >
                    {cropText((user.manager ? `${user.manager.first_name} ${user.manager.last_name}` : ''), 60)}
                </RouterStyledLink>
            </TableCell>
            <TableCell className={noActions ? classes.textRight : ''}>
                <StatusChip label={user.status} />
            </TableCell>
            {!noActions && (
                <TableCell className={classes.textRight}>
                    <Actions actionItems={actionItems} />
                </TableCell>
            )}
        </TableRow>
    );
};

export default UserRow;
