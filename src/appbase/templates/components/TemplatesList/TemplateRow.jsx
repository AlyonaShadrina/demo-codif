import { makeStyles, TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import Actions from '../../../_common/ButtonWithMenuActions';


const useStyles = makeStyles((theme) => ({
    textRight: {
        textAlign: 'right',
    },
}));

const TemplateRow = ({
    template, del, edit, uploadFile,
}) => {
    const classes = useStyles();

    const handleUploadTrain = () => {
        uploadFile(template.id, 'train');
    };

    const handleUploadRecognize = () => {
        uploadFile(template.id, 'recognize');
    };

    const handleEdit = () => {
        edit({ id: template.id });
    };

    const handleDelete = () => {
        del(template.id);
    };

    const actionItems = [
        {
            text: 'Train',
            onClick: handleUploadTrain,
        },
        {
            text: 'Recognize',
            onClick: handleUploadRecognize,
        },
        {
            text: 'Edit',
            onClick: handleEdit,
        },
        {
            text: 'Delete',
            onClick: handleDelete,
            confirm: {
                title: 'Are you sure you want to delete this document type?',
                text: 'This action is irreversible.',
            },
        },
    ];

    return (
        <TableRow>
            <TableCell>
                {template.name}
            </TableCell>
            <TableCell>
                {template.created_at}
            </TableCell>
            <TableCell className={classes.textRight}>
                <Actions actionItems={actionItems} />
            </TableCell>
        </TableRow>
    );
};

export default TemplateRow;
