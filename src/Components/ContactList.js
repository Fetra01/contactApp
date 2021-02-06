import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';

export default function ContactList() {

    let contacts = useSelector(state => state)
    return(
        <Fragment>
            <h1 className="display-4 my-4">Vos Contacts :</h1>
            {contacts.map(contact => {
                return <ContactItem key={contact.id} contact={contact} />
            })}
        </Fragment>
    )

   
}
