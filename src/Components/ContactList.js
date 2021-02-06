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

    /*const contacts = useSelector( state => state.contacts)
    console.log(contacts)

    const shows = useSelector( state => state.show)

    const dispatch = useDispatch();

    const show = (e) => {
        dispatch({
            type: 'SHOW',
            payload: e.target.id
        })

        console.log(shows)
    }
    return (
        <Fragment>
            <h1 className="display-4 my-4">Nos Contacts :</h1>
            {contacts.map(contact => (
                <div key={contact.id} id={contact.id} className="card card-body mb-3 text-center">
                    <h4>{contact.nom} &nbsp; <i className="fas fa-sort-down" style={{cursor: "pointer"}} onClick={show}></i></h4>
                    {shows ? null :
                        <ul className="card card-body mb-3">
                            <li className="list-group-item">
                                Email: {contact.email}
                            </li>
                            <li className="list-group-item">
                                Tél: {contact.tel}
                            </li>
                        </ul>
                    }
                </div>
            ))}
        </Fragment>
    )*/
}
