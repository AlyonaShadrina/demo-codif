import React from 'react';

import HeadTag from '../appbase/_common/HeadTag';
import WorkflowsContainer from '../appbase/templates/containers/DocumentsListContainer'


const Workflows = () => {
    return (
        <>
            <HeadTag title="Workflows"/>
            <WorkflowsContainer />
        </>
    );
};

export default Workflows;