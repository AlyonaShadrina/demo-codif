import { Typography } from '@material-ui/core';
import React from 'react';
import BackButton from '../appbase/_common/BackButton';

import HeadTag from '../appbase/_common/HeadTag';
import TemplateEditContainer from '../appbase/templates/containers/TemplateEditContainer';
import { paths } from '../dictionary';

const DataExtractions = () => (
    <>
        <HeadTag title="Edit Document Type"/>
        <BackButton path={paths.templates} title="document types"/>
        <TemplateEditContainer />
    </>
);

export default DataExtractions;