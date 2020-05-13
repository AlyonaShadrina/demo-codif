import { Typography } from '@material-ui/core';
import flattendeep from 'lodash.flattendeep';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ChevronDownSmall from '../../../../assets/icons/ChevronDownSmall';
import LogProcess from '../../../../assets/icons/LogProcess';
import LogDone from '../../../../assets/icons/LogDone';
import LogError from '../../../../assets/icons/LogError';

const useStyles = makeStyles(theme => ({
    root: {
        maxHeight: 393,
        overflowY: 'auto',
    },
    chevron: {
        marginRight: 6,
        transition: 'transform .3s ease'
    },
    chevronRight: {
        transform: 'rotateZ(-90deg)',
    },
    treeItem: ({ text }) => ({
        position: 'relative',
        '&:after': {
            content: `"(${text})"`,
            fontSize: 11,
            color: theme.palette.text.secondary,
            marginLeft: 6
        },

    })
}));

const logInfo = [
    {
        id: 'name1',
        name: 'name1',
        status: 'process',
        time: '09min 40sek',
        children: [
            {
                id: 'name1-2',
                name: 'name1-2',
                status: 'done',
                time: '09min 40sek',
                children: [

                ],
            },
            {
                id: 'name1-3',
                name: 'name1-3',
                status: 'process',
                time: '09min 40sek',
                children: [
                    {
                        id: 'name1-3-1',
                        name: 'name1-3-1',
                        status: 'process',
                        time: '09min 40sek',
                        children: [

                        ],
                    },
                    {
                        id: 'name1-3-2',
                        name: 'name1-3-2',
                        status: 'error',
                        time: '09min 40sek',
                        children: [

                        ],
                    },
                ],
            },
            {
                id: 'name1-4',
                name: 'name1-4',
                status: 'process',
                time: '09min 40sek',
                children: [
                    {
                        id: 'name1-4-1',
                        name: 'name1-4-1',
                        status: 'process',
                        time: '09min 40sek',
                        children: [

                        ],
                    },
                    {
                        id: 'name1-4-2',
                        name: 'name1-4-2',
                        status: 'error',
                        time: '09min 40sek',
                        children: [

                        ],
                    },
                ],
            },
            {
                id: 'name1-5',
                name: 'name1-5',
                status: 'process',
                time: '09min 40sek',
                children: [
                    {
                        id: 'name1-5-1',
                        name: 'name1-5-1',
                        status: 'process',
                        time: '09min 40sek',
                        children: [

                        ],
                    },
                    {
                        id: 'name1-5-2',
                        name: 'name1-5-2',
                        status: 'error',
                        time: '09min 40sek',
                        children: [
                            {
                                id: 'name1-5',
                                name: 'name1-5',
                                status: 'process',
                                time: '09min 40sek',
                                children: [
                                    {
                                        id: 'name1-5-1',
                                        name: 'name1-5-1',
                                        status: 'process',
                                        time: '09min 40sek',
                                        children: [

                                        ],
                                    },
                                    {
                                        id: 'name1-5-2',
                                        name: 'name1-5-2',
                                        status: 'error',
                                        time: '09min 40sek',
                                        children: [

                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

const recursiveMap = (arr) => {

    return arr.map(item => {
        const classes = useStyles({ text: item.time });

        let status;
        switch (item.status) {
        case 'process':
            status = <LogProcess />;
            break;
        case 'done':
            status = <LogDone />;
            break;
        default:
            status = <LogError />;
        }

        let iconProps = {
            icon: (
                <>
                    {status}
                </>
            ),
        };

        if (item.children.length > 0) {
            iconProps = {
                expandIcon: (
                    <>
                        <ChevronDownSmall title="Expand" className={`${classes.chevron} ${classes.chevronRight}`}/>
                        {status}
                    </>
                ),
                collapseIcon: (
                    <>
                        <ChevronDownSmall title="Collapse" className={classes.chevron}/>
                        {status}
                    </>
                ),
            }
        }

        return (
            <TreeItem
                nodeId={item.id}
                key={item.name}
                label={item.name}
                classes={{
                    label: classes.treeItem
                }}
                {...iconProps}
            >
                {item.children.length > 0 ? recursiveMap(item.children) : null}
            </TreeItem>
        )
    })
};

const recursiveMapId = (arr) => (
    arr.map((item, i) => (
        item.children.length > 0
            ? [recursiveMapId(item.children), item.id]
            : item.id
    ))
);

const LogTree = ({ isExpanded, className }) => {
    const classes = useStyles();
    const defaulExpanded = isExpanded ? flattendeep(recursiveMapId(logInfo)) : [''];

    return (
        <Typography
            component="div"
            variant="body2"
            className={`${classes.title} ${classes.root} ${className}`}
        >
            {/*<TreeView*/}
            {/*    key={isExpanded}*/}

            {/*    defaultExpanded={defaulExpanded}*/}
            {/*    defaultCollapseIcon={*/}
            {/*        <ChevronDownSmall title="Collapse" />*/}
            {/*    }*/}
            {/*    defaultExpandIcon={*/}
            {/*        <ChevronDownSmall title="Expand" className={`${classes.chevron} ${classes.chevronRight}`}/>*/}
            {/*    }*/}
            {/*>*/}
            {/*    {recursiveMap(logInfo)}*/}
            {/*</TreeView>*/}
            No logs yet!
        </Typography>
    );
};

export default LogTree;