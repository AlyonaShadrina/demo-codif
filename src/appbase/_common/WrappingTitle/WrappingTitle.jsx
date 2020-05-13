import React, { useState } from 'react';
import { Typography, makeStyles, Collapse } from '@material-ui/core';

import ChevronDown from '../../../assets/icons/ChevronDown';

const useStyles = makeStyles((theme) => ({
    button: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        marginBottom: 20,
        outline: 'none',
        '& span': {
            verticalAlign: 'sub',
        },
    },
    chevron: ({ isExpanded }) => ({
        verticalAlign: 'middle',
        marginLeft: 15,
        transform: !isExpanded ? 'rotateZ(-90deg)' : 'rotateZ(0)',
        transition: `transform ${theme.transitions.duration.shorter}ms`,
    }),
}));

const WrappingTitle = ({
    title, opened = true, children, ...restProps
}) => {
    const [isExpanded, setExpanded] = useState(opened);

    const classes = useStyles({ isExpanded });

    const toggleExpanded = () => setExpanded(!isExpanded);

    return (
        <div {...restProps}>
            <Typography
                component="h2"
            >
                <button onClick={toggleExpanded} className={classes.button}>
                    <Typography variant="h1" component="span">
                        {title}
                    </Typography>
                    <ChevronDown fill="primary" className={classes.chevron} />
                </button>
            </Typography>
            <Collapse in={isExpanded}>
                {children}
            </Collapse>
        </div>
    );
};

export default WrappingTitle;
