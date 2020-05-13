import {
    makeStyles, Paper, Table, TableBody, Typography,
} from '@material-ui/core';
import React from 'react';
import FileRow from './FileRow';


const useStyles = makeStyles(() => ({
    container: {
        paddingRight: 0,
        paddingLeft: 0,
    },
    caption: {
        padding: '0 30px 25px',
    },
}));

const FileDownload = ({ files }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.container}>
            <Typography
                component="h3"
                variant="caption"
                className={classes.caption}
            >
                Output Files
            </Typography>
            <Table>
                <TableBody>
                    {
                        false && files.map((item, i) => <FileRow item={item} key={i} />)
                    }
                </TableBody>
            </Table>
        </Paper>
    );
};

export default FileDownload;
