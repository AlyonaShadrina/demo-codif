import { Table, TableBody } from '@material-ui/core';
import React from 'react';

import TableHeadRow from '../../../_common/TableHeadRow';
import TemplateRow from './TemplateRow';


const TemplatesList = ({
    templates, del, edit, uploadFile,
}) => {
    const tableHeadItems = [
        {
            text: 'Name',
        },
        {
            text: 'Creation date',
        },
        {
            text: 'Action',
        },
    ];

    return (
        <Table>
            <TableHeadRow cells={tableHeadItems} />
            <TableBody>
                {Object.keys(templates).map((id) => (
                    <TemplateRow
                        key={id}
                        del={del}
                        edit={edit}
                        uploadFile={uploadFile}
                        template={templates[id]}
                    />
                ))}
            </TableBody>
        </Table>
    );
};

export default TemplatesList;
