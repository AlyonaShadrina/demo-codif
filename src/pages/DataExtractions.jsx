import { Typography } from '@material-ui/core';
import React from 'react';

import HeadTag from '../appbase/_common/HeadTag';
import TemplatesListContainer from '../appbase/templates/containers/TemplatesListContainer';

const DataExtractions = () => (
    <>
        <HeadTag title="DataExtractions"/>
        <Typography
            variant="h1"
            className="pageTitle"
        >
            Data Extractions
        </Typography>
        <TemplatesListContainer />
    </>
);

export default DataExtractions;