import {
    Button, makeStyles, Table, TableBody, Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import { paths } from '../../../../dictionary';
import FileRow from './FileRow';


const useStyles = makeStyles((theme) => ({
    caption: {
        padding: '0 30px 25px',
    },
    marginBottom: {
        marginBottom: 25,
    },
    textCenter: {
        textAlign: 'center',
    },
}));

export const listCaption = 'Uploaded Files';

const UploadedFiles = ({ files, deleteFile }) => {
    const classes = useStyles();

    if (!files.length) {
        return null;
    }

    return (
        <>
            <Typography
                component="h3"
                variant="caption"
                className={classes.caption}
            >
                Uploaded Files
            </Typography>
            <Table className={classes.marginBottom}>
                <TableBody>
                    {
                        files.map((file, i) => (
                            <FileRow
                                file={file}
                                key={i}
                                deleteFile={deleteFile}
                            />
                        ))
                    }
                </TableBody>
            </Table>
            <div className={classes.textCenter}>
                <Link to={paths.workflows}>
                    <Button
                        color="primary"
                        variant="contained"
                    >
                        View all list
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default UploadedFiles;
