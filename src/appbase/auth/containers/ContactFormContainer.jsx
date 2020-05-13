import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from '../components/ContactForm';
import * as actions from '../state/actions';
import * as selectors from '../state/selectors';


const ContactFormContainer = () => {
    const dispatch = useDispatch();
    const { contact_loading, contact_sent, contact_error } = useSelector(selectors.auth);

    const handleSubmit = (values) => dispatch(actions.requestContact(values));

    return (
        <ContactForm
            onSubmit={handleSubmit}
            contactLoading={contact_loading}
            contactSent={contact_sent}
            contactError={contact_error}
        />
    );
};

export default ContactFormContainer;
