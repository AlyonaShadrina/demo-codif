import React from 'react';
import DictionaryContext from '../providers/DictionaryProvider/DictionaryContext';

const withDict = WrappedComponent => props => (
    <DictionaryContext.Consumer>
        {({ variables_types, variables_types_ml }) => (
            <WrappedComponent
                variables_types={variables_types}
                variables_types_ml={variables_types_ml}
                {...props}
            />
        )}
    </DictionaryContext.Consumer>
);

export default withDict;