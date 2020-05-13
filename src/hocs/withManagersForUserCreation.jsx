import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../appbase/users/state/actions';
import * as selectors from '../appbase/users/state/selectors';

const withManagersForUserCreation = WrappedComponent => props => {
    const dispatch = useDispatch();

    const managerIds = useSelector(selectors.managersForUserCreation);

    useEffect(() => {
        dispatch(actions.getManagersForUserCreation());
    }, []);

    return (
        <WrappedComponent
            managerIds={managerIds}
            {...props}
        />
    )
};

export default withManagersForUserCreation;