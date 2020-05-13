import { Table, TableBody } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import TableHeadRow from '../../../_common/TableHeadRow';
import DocumentRow from './DocumentRow';


const useStyles = makeStyles((theme) => ({
    loaderRow: {
        textAlign: 'center',
        left: '50%',
        position: 'absolute',
        transform: 'translate(-50%, 10px)',
    },
}));

const WorkflowsTable = ({ documents }) => {
    const classes = useStyles();

    const tableHeadItems = [
        {
            text: 'Document name',
        },
        {
            text: 'Document type',
        },
        {
            text: 'Creation date',
        },
    ];

    return (
        <>
            <Table className={classes.table}>
                <TableHeadRow cells={tableHeadItems} />
                <TableBody>
                    {documents.map((doc, i) => (
                        <DocumentRow key={i} doc={doc} />
                    ))}
                </TableBody>
            </Table>
        </>
    );
};

export default WorkflowsTable;
