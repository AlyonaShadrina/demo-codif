import { makeStyles, Table, TableBody } from '@material-ui/core';
import React from 'react';

import TableHeadRow from '../../../../_common/TableHeadRow';
import UserRow from '../UserRow';


const useStyles = makeStyles((theme) => ({
    TableHeadRow: {
        backgroundColor: theme.palette.grey['50'],
        '& th': {
            color: theme.palette.text.primary,
            paddingTop: 20,
            paddingBottom: 20,
            border: 'none',
        },
    },
    TableRow: {
        '&:nth-of-type(even)': {
            backgroundColor: theme.palette.grey['50'],
        },
        '& td': {
            border: 'none',
        },
    },
    TableRowFirstCell: {
        paddingLeft: theme.spacing(8),
    },
}));

const ManagersUserList = ({ user_ids, allUsers }) => {
    const classes = useStyles();

    const headers = [
        {
            text: 'Basic info',
        },
        {
            text: 'Date creation',
        },
        {
            text: 'Assigned manager',
        },
        {
            text: 'Status',
        },
    ];

    return (
        <Table>
            <TableHeadRow cells={headers} classes={classes} />
            <TableBody>
                {user_ids.map((id) => (
                    <UserRow
                        key={id}
                        user={allUsers[id]}
                        noActions
                        classNames={classes}
                    />
                ))}
            </TableBody>
        </Table>
    );
};

export default ManagersUserList;
