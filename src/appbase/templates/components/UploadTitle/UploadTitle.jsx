import { Box, Typography } from '@material-ui/core';
import React from 'react';

const UploadTitle = ({ action, template }) => (
    <Box mb={3}>
        <Typography
            component="h1"
            variant="h1"
        >
            Upload file
        </Typography>
        <Typography>
            <Typography variant="caption">Action: </Typography>
            {action}
        </Typography>
        <Typography>
            <Typography variant="caption">Document type: </Typography>
            {template.name}
        </Typography>
    </Box>
);

export default UploadTitle;
