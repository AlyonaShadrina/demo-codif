import React from 'react';

import Calendar from '../assets/icons/Calendar';
import ChevronDown from '../assets/icons/ChevronDown';
import Number from '../assets/icons/Number';
import StatusDone from '../assets/icons/StatusDone';
import StatusError from '../assets/icons/StatusError';
import StatusTime from '../assets/icons/StatusTime';
import StatusTotal from '../assets/icons/StatusTotal';
import Text from '../assets/icons/Text';


const switchIcon = (type, fill) => {
    switch (type) {
    // variables fields
    case 'Text':
        return <Text fill={fill || 'primary'} />;
    case 'Number':
        return <Number fill={fill || 'primary'} />;
    case 'Date':
        return <Calendar fill={fill || 'primary'} />;
    case 'Dropdown':
        return <ChevronDown fill={fill || 'primary'} />;
    // historical state
    case 'run_success':
        return <StatusDone />;
    case 'run_total':
        return <StatusTotal />;
    case 'run_failed':
        return <StatusError />;
    case 'runtime_average':
        return <StatusTime />;
    case 'runtime_total':
        return <StatusTime />;

    default:
        return <Text fill="primary" />;
    }
};

export default switchIcon;
