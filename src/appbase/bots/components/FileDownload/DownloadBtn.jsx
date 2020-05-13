import { Fab, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

import Done from '../../../../assets/icons/Done';
import Download from '../../../../assets/icons/Download';


const useStyles = makeStyles(() => ({
    download: {
        cursor: 'pointer',
        verticalAlign: 'middle',
    },
}));

const DownloadBtn = ({ link }) => {
    const classes = useStyles();

    const [done, setDone] = useState(false);

    const download = () => {
        setDone(true);
        setTimeout(() => {
            setDone(false);
        }, 2000);
    };

    if (done) {
        return (
            <Fab size="small" color="primary" title="Download started">
                <Done
                    fill="primary"
                    className={classes.download}
                />
            </Fab>

        );
    }
    return (
        <a href={link} download>
            <Fab
                size="small"
                color="primary"
                title="Download"
                onClick={download}
            >
                <Download
                    fill="white"
                    className={classes.download}
                />
            </Fab>
        </a>
    );
};

export default DownloadBtn;
