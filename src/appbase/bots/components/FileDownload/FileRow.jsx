import {
    makeStyles, TableCell, TableRow, Typography,
} from '@material-ui/core';
import React from 'react';

import FilePdf from '../../../../assets/icons/FilePdf';
import DownloadBtn from './DownloadBtn';

const useStyles = makeStyles((theme) => ({
    row: {
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
        '&:last-of-type td': {
            borderBottom: 'none',
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
    },
    cellButton: {
        textAlign: 'right',
    },
}));

const FileRow = ({ item, i }) => {
    const classes = useStyles();

    return (
        <TableRow key={i} className={classes.row}>
            <TableCell className={classes.icon} padding="checkbox">
                <FilePdf title={`${item.fileName} icon`} />
            </TableCell>
            <TableCell padding="none">
                {item.name}
            </TableCell>
            {/* <TableCell className={classes.lightText}> */}
            {/*    <Typography variant="subtitle1"> */}
            {/*        {item.date} */}
            {/*    </Typography> */}
            {/* </TableCell> */}
            {/* <TableCell> */}
            {/*    <Typography variant="subtitle1"> */}
            {/*        {item.size} */}
            {/*    </Typography> */}
            {/* </TableCell> */}
            <TableCell>
                <Typography variant="subtitle1">
                    {item.is_analyzed ? 'analyzed' : 'not analyzed yet'}
                </Typography>
            </TableCell>
            <TableCell className={classes.cellButton}>
                <DownloadBtn link={item.path} />
            </TableCell>
        </TableRow>
    );
};

export default FileRow;
