import React from 'react';

import HeadTag from '../appbase/_common/HeadTag';
import UploadFileContainer from '../appbase/templates/containers/UploadFileContainer';

const UploadFile = () => (
    <>
        <HeadTag title="Upload File"/>
        <UploadFileContainer />
    </>
);

export default UploadFile;