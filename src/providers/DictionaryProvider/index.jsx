import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as authSelectors from '../../appbase/auth/state/selectors';
import { dictionary } from '../../appbase/dictionary/state/selectors';
import * as actions from '../../appbase/dictionary/state/actions';
import DictionaryContext from './DictionaryContext';


const DictionaryProvider = ({ children }) => {
    const [dictionaries, setDictionaries] = useState({});

    const dispatch = useDispatch();

    const { variables_types, variables_types_ml } = useSelector(dictionary);
    const { token } = useSelector(authSelectors.auth);

    useEffect(() => {
        dispatch(actions.getVariableTypesDict());
        dispatch(actions.getVariableTypesDictML());
    }, [token]);

    useEffect(() => {
        setDictionaries((oldObj) => ({
            ...oldObj,
            variables_types,
            variables_types_ml,
        }));
    }, [variables_types, variables_types_ml]);


    return (
        <DictionaryContext.Provider
            value={{
                variables_types: dictionaries.variables_types,
                variables_types_ml: dictionaries.variables_types_ml,
            }}
        >
            {children}
        </DictionaryContext.Provider>
    );
};

export default DictionaryProvider;
