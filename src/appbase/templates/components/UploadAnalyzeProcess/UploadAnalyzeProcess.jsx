import { Box } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';


const UploadAnalyzeProcess = ({ isAnalyzing, document }) => {
    if (!isAnalyzing) {
        return null;
    }
    return (
        <div>
            <Box mb={3}>
                Analyze
                {document.name && ` of ${document.name} `}
                started...
            </Box>
            <CircularProgress />
            <Box mt={3}>It may take a few minutes</Box>
        </div>
    );
};

export default UploadAnalyzeProcess;
