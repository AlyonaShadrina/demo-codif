import React from 'react';

import HeadTag from '../appbase/_common/HeadTag';
import DocumentContainer from '../appbase/templates/containers/DocumentContainer';

const Document = () => {
    return (
        <>
            <HeadTag title="Edit document"/>
            <DocumentContainer />
        </>
    );
};

export default Document;