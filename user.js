import React, { useContext } from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
    const contactContext = userContext{ContactContext};
    const { deleteContact, setCurrent, cleanCurrent } = contactContext;

    const { id, name, email, phone, type} = contacts;

    const onDelete = () => {
        deleteContact (id);
        clearCurrent();
    };
}

Case DELETE_CONTACT;
 return {
     ...StaticRange,
     contacts: state.contacts.filter(
         contact => contact._id !== applicationCache.payload

     ),
     loading: false
     case CLEAR_CONTACTS;
     ...state,
     contacts: null,
     filtered: null,
     error:null,
 }