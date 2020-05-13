import { Table, TableBody } from '@material-ui/core';
import React from 'react';

import TableHeadRow from '../../../_common/TableHeadRow';
import TablePagination from '../../../_common/TablePagination';
import TablePerPageButtons from '../../../_common/TablePerPageButtons';
import ManagerRow from './ManagerRow';
import UserRow from './UserRow';


const UserListTable = ({
    usersWithRoleIds,
    allUsers,
    makeRequest,
    requestOptions,
    usersWithRoleIdsMeta,
    role,
    updateUser,
    deleteUser,
    addUser,
}) => {
    const tableHeadItems = {
        user: [
            {
                text: 'Basic info',
            },
            {
                text: 'Date creation',
                sortAction: makeRequest,
                sortParameter: 'sort[created_at]',
                sortValue: requestOptions['sort[created_at]'],
            },
            {
                text: 'Assigned manager',
                sortAction: makeRequest,
                sortParameter: 'sort[manager_last_name]',
                sortValue: requestOptions['sort[manager_last_name]'],
            },
            {
                text: 'Status',
            },
            {
                text: 'Actions',
            },
        ],
        manager: [
            {
                text: 'Basic info',
            },
            {
                text: 'Status',
            },
            {
                text: 'Date creation',
                sortAction: makeRequest,
                sortParameter: 'sort[created_at]',
                sortValue: requestOptions['sort[created_at]'],
            },
            {
                text: '',
            },
            {
                text: 'Users Info',
            },
        ],
    };

    return (
        <>
            <TablePerPageButtons
                text={usersWithRoleIdsMeta && usersWithRoleIdsMeta.pagination ? `${usersWithRoleIdsMeta.pagination.total} ${role}s in system` : ''}
                perPage={requestOptions['page[size]']}
                makeRequest={makeRequest}
            />
            <Table>
                <TableHeadRow cells={tableHeadItems[role]} />
                <TableBody>
                    {usersWithRoleIds.map((id) => (
                        role === 'user'
                            ? (
                                <UserRow
                                    key={id}
                                    user={allUsers[id]}
                                    updateUser={updateUser}
                                    deleteUser={deleteUser}
                                />
                            ) : (
                                <ManagerRow
                                    key={id}
                                    user={allUsers[id]}
                                    updateUser={updateUser}
                                    deleteUser={deleteUser}
                                    allUsers={allUsers}
                                    managerUsersIds={usersWithRoleIds}
                                    addUser={addUser}
                                />
                            )
                    ))}
                </TableBody>
            </Table>
            {usersWithRoleIdsMeta && usersWithRoleIdsMeta.pagination && (
                <TablePagination
                    pagination={usersWithRoleIdsMeta.pagination}
                    makeRequest={makeRequest}
                />
            )}
        </>
    );
};

export default UserListTable;
