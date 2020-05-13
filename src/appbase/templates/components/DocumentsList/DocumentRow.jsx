import {
    makeStyles, TableCell, TableRow, Typography,
} from '@material-ui/core';
import React from 'react';

import { paths } from '../../../../dictionary';
import cropText from '../../../../utils/cropText';
import RouterStyledLink from '../../../_common/RouterStyledLink';

const useStyles = makeStyles((theme) => ({
    documentName: {
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
    },
    documentLink: {
        color: 'black',
        textDecoration: 'underline',
        '&:hover': {
            color: theme.palette.primary.main,
        },
    },
    textRight: {
        textAlign: 'right',
        paddingRight: 15,
    },
}));

const DocumentRow = (item) => {
    const classes = useStyles();

    const { doc } = item;

    if (doc && doc.trained_on && doc.trained_on[0]) {
        const template = doc.trained_on[0];

        return (
            <TableRow>
                <TableCell className="maxWidth400">
                    <RouterStyledLink
                        to={`${paths.templates}/${template.id}${paths.trainAction}/${doc.id}`}
                        className={classes.documentLink}
                    >
                        <Typography variant="body2">
                            {cropText(doc.name, 60)}
                        </Typography>
                    </RouterStyledLink>
                </TableCell>
                <TableCell className="maxWidth400">
                    <RouterStyledLink
                        to={`${paths.templates}/${template.id}`}
                        className={classes.documentLink}
                    >
                        <Typography variant="body2">
                            {cropText(template.name, 60)}
                        </Typography>
                    </RouterStyledLink>
                </TableCell>
                <TableCell className={classes.textRight}>
                    <Typography variant="body2">
                        {doc.created_at}
                    </Typography>
                </TableCell>
            </TableRow>
        );
    }

    return (
        <TableRow>
            <TableCell className="maxWidth400">
                <Typography variant="body2">
                    {cropText(doc.name, 60)}
                </Typography>
            </TableCell>
            <TableCell />
            <TableCell className={classes.textRight}>
                <Typography variant="body2">
                    {doc.created_at}
                </Typography>
            </TableCell>
        </TableRow>
    );
};

export default DocumentRow;
