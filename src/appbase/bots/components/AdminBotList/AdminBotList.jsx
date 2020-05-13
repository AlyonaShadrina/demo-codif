import {
    makeStyles, Table, TableBody, TableRow,
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

import TableHeadRow from '../../../_common/TableHeadRow';
import TablePagination from '../../../_common/TablePagination';
import TablePerPageButtons from '../../../_common/TablePerPageButtons';
import BotRow from './BotRow';


const useStyles = makeStyles(() => ({
    loaderRow: {
        textAlign: 'center',
        left: '50%',
        position: 'absolute',
        transform: 'translate(-50%, 10px)',
    },
}));

const AdminBotList = ({
    botList, makeRequest, requestOptions, botListMeta, loading, usersForBotCreation,
}) => {
    const tableHeadItems = [
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
            text: 'Last started date',
        },
        {
            text: 'AA Bot Name',
        },
        {
            text: 'Assigned user',
        },
        {
            text: 'Status',
        },
    ];
    const classes = useStyles();

    return (
        <>
            <TablePerPageButtons
                text={`${botListMeta && botListMeta.pagination ? botListMeta.pagination.total : ''} bots`}
                perPage={requestOptions['page[size]']}
                makeRequest={makeRequest}
            />
            <Table>
                <TableHeadRow cells={tableHeadItems} />
                <TableBody>
                    {
                        loading
                        && (
                            <TableRow className={classes.loaderRow}>
                                <td><CircularProgress disableShrink /></td>
                            </TableRow>
                        )
                    }

                    {!loading && Object.keys(botList).map((id) => (
                        <BotRow
                            key={id}
                            bot={botList[id]}
                            id={id}
                            usersForBotCreation={usersForBotCreation}
                        />
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                pagination={botListMeta ? botListMeta.pagination : {}}
                makeRequest={makeRequest}
            />
        </>
    );
};

export default AdminBotList;
