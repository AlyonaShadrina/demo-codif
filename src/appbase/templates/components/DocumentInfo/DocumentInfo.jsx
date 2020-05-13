import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

import { paths } from '../../../../dictionary';
import { confidenceColor } from '../../../../utils/confidenceColor';
import RouterStyledLink from '../../../_common/RouterStyledLink';

const useStyles = makeStyles((theme) => ({
    cell: {
        borderBottom: `1px solid ${theme.palette.grey.A100}`,
        padding: '20px 10px',
    },
    confidence: ({ confidenceColor, confidencePercents }) => ({
        // borderLeft: `1px solid ${theme.palette.grey.A100}`,
        backgroundColor: confidenceColor,
        backgroundImage: `linear-gradient(to right, ${confidenceColor} 0%,${confidenceColor} ${confidencePercents}%,rgba(255,255,255,1) ${confidencePercents}.1%,rgba(255,255,255,1) 100%)`,
    }),
    cellStatText: {
        paddingLeft: 30,
    },
    title: {
        marginBottom: 5,
        marginTop: 5,
        textAlign: 'center',
    },
    type: {
        textAlign: 'center',
    },
}));

const DocumentInfo = ({ document, template, isRecognize }) => {
    const classes = useStyles(
        document.trained[0]
            ? {
                confidenceColor: confidenceColor(document.trained[0].accuracy),
                confidencePercents: document.trained[0].accuracy,
            }
            : {},
    );

    return (
        <Grid container>
            <Grid
                item
                xs={12}
                className={classes.cell}
            >
                <Typography
                    variant="h1"
                    component="h1"
                    className={classes.title}
                >
                    {document.name}
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                className={`${classes.cell} ${classes.type}`}
            >
                <Typography component="span">
                    Document type:
                </Typography>
                <Typography variant="caption" component="span">
                    <RouterStyledLink to={`${paths.templates}/${template.id}`}>{template.name}</RouterStyledLink>
                </Typography>
                <Typography variant="subtitle1">
                    You can
                    {' '}
                    <RouterStyledLink to={`${paths.templates}/${template.id}${paths.trainAction}${paths.templatesUpload}`}>upload</RouterStyledLink>
                    {' '}
new document
                </Typography>
            </Grid>
            {
                isRecognize && (
                    <Grid
                        item
                        xs={12}
                        className={`${classes.cell} ${classes.confidence} ${classes.cellStatText}`}
                    >
                        <Grid
                            container
                            justify="space-between"
                            alignItems="center"
                        >
                            <Typography variant="body2">
                                Document Analysis Confidence Level
                            </Typography>
                            <Typography
                                variant="h1"
                                component="span"
                                style={{ marginBottom: 0 }}
                            >
                                {document.trained.length > 0 && document.trained[0].accuracy}
%
                            </Typography>
                        </Grid>
                    </Grid>
                )
            }
        </Grid>
    );
};

export default DocumentInfo;
