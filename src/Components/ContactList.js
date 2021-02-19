import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';

export default function ContactList() {

    const contacts = useSelector(state => state.contact.contacts);
    return(
        
        <Fragment>
            <h1 className="display-4 my-4">Vos Contacts :</h1>
            {contacts.map(contact => {
                return <ContactItem key={contact.id} contact={contact} />
            })}
        </Fragment>
    )

   
}
