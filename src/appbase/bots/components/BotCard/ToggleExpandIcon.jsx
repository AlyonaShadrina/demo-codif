import { Fab, makeStyles } from '@material-ui/core';
import React from 'react';

import Collapse from '../../../../assets/icons/Collapse';
import Expand from '../../../../assets/icons/Expand';


const useStyles = makeStyles(() => ({
    toggle: {
        position: 'absolute',
        top: 5,
        right: 5,
    },
}));

const ToggleExpandIcon = ({ isExpanded, toggleExpanded }) => {
    const classes = useStyles();
    return (
        <Fab className={classes.toggle} onClick={toggleExpanded}>
            {isExpanded
                ? <Collapse title="Show less" />
                : <Expand title="Show more" />}
        </Fab>
    );
};

export default ToggleExpandIcon;
