import {
    makeStyles, TableCell, TableHead, TableRow,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';

import ChevronDoubleSmall from '../../../assets/icons/ChevronDoubleSmall';
import ArrowSmall from '../../../assets/icons/ArrowSmall';


const useStyles = makeStyles(() => ({
    textRight: {
        textAlign: 'right',
        paddingRight: 15,
    },
    cell: ({ sortable }) => {
        if (sortable) {
            return {
                cursor: 'pointer',
                '& svg': {
                    marginLeft: 5,
                },
            };
        }
        return {};
    },
}));

const TableHeadCell = ({ item, isLast, className }) => {
    const {
        text, sortAction, sortParameter, sortValue, ...restProps
    } = item;

    const classes = useStyles({ sortable: !!sortAction });

    const [order, setOrder] = useState(sortValue);

    const handleClick = () => {
        setOrder((oldVal) => {
            if (oldVal === 'asc') {
                return 'desc';
            }
            return 'asc';
        });
    };

    useEffect(() => {
        if (sortAction && order) {
            sortAction({ [sortParameter]: order });
        }
    }, [order]);

    return (
        <TableCell
            className={`${isLast ? classes.textRight : ''} ${classes.cell} ${className}`}
            onClick={handleClick}
            {...restProps}
        >
            {text}
            { sortAction && !order && <ChevronDoubleSmall fill="white" />}
            { sortAction && order === 'asc' && <ArrowSmall fill="white" />}
            { sortAction && order === 'desc' && <ArrowSmall fill="white" deg={180} />}
        </TableCell>
    );
};

const TableHeadRow = ({ cells, classes = {} }) => (
    <TableHead>
        <TableRow className={classes.TableHeadRow}>
            {cells.map((item, i) => (
                <TableHeadCell
                    key={i}
                    item={item}
                    isLast={i === cells.length - 1}
                    className={i === 0 ? classes.TableRowFirstCell : ''}
                />
            ))}
        </TableRow>
    </TableHead>
);

export default TableHeadRow;
