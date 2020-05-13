import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';


const WithVisibilitySensor = ({ children, i, addVisibleSection }) => {
    const onChange = (isVisible) => {
        if (isVisible) {
            addVisibleSection(i);
        }
    };

    return (
        <VisibilitySensor onChange={onChange}>
            {children}
        </VisibilitySensor>
    );
};

export default WithVisibilitySensor;
