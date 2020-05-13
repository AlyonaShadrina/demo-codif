import {
    Fab, makeStyles, TableCell, TableRow, Typography,
} from '@material-ui/core';
import React from 'react';

import Trash from '../../../../assets/icons/Trash';
import File from '../../../../assets/icons/File';

const useStyles = makeStyles((theme) => ({
    row: {
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
    },
    largeCell: {
        [theme.breakpoints.up('md')]: {
            width: '50%',
        },
    },
    lightText: {
        color: theme.palette.text.secondary,
    },
    icon: {
        paddingLeft: 30,
        paddingRight: 10,
        '& svg': {
            verticalAlign: 'middle',
        },
    },
    cell: {
        borderTop: `1px solid ${theme.palette.grey.A100}`,
    },
    cellButton: {
        textAlign: 'right',
    },
}));

const FileRow = ({ file, deleteFile }) => {
    const classes = useStyles();

    const handleDelete = () => {
        deleteFile(file.id);
    };

    return (
        <TableRow className={classes.row}>
            <TableCell className={`${classes.cell} ${classes.icon}`} padding="checkbox">
                <File title={`${file.name} icon`} />
            </TableCell>
            <TableCell className={`${classes.cell} ${classes.largeCell}`} padding="none">
                {file.name}
            </TableCell>
            <TableCell className={`${classes.cell} ${classes.lightText}`}>
                <Typography variant="subtitle1">
                    {/* {item.date} */}
                </Typography>
            </TableCell>
            <TableCell className={`${classes.cell}`}>
                <Typography variant="subtitle1">
                    {/* {item.size} */}
                </Typography>
            </TableCell>
            <TableCell className={`${classes.cell} ${classes.cellButton}`}>
                <Fab
                    size="small"
                    color="default"
                    title="Delete file"
                    onClick={handleDelete}
                >
                    <Trash
                        fill="red"
                        className={classes.download}
                    />
                </Fab>
            </TableCell>
        </TableRow>
    );
};

export default FileRow;
