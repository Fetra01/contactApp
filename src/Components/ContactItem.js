import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../Redux/actions/contactActions';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

export default function ContactItem({contact}) {
    const { id,nom, email, tel } = contact;
    const [show, setShow] = useState(true);
    const dispatch = useDispatch();
    

    return (
        <div className="card card-body mb-3 text-center">
            <h4>
               <Avatar className="mr-2" name={nom} size="45" round={true} />{nom} &nbsp; 
                <i  className="fas fa-sort-down" 
                    style={{cursor: "pointer"}} 
                    onClick={() => setShow(!show)}
                    
                />
                <span className="actions">
                    
                    <i  className="fas fa-times float-right mr-2"
                        style={{cursor: "pointer", color: "red"}}
                        onClick={() => dispatch(deleteContact(id))}
                    />
                    
                    <Link to={`/contacts/modifier-contact/${id}`}>
                        <i className="fas fa-edit float-right mr-4"
                            style={{cursor: "pointer", color:"grey"}}
                        />
                    </Link>
                </span>
            </h4>
            {show ? null :
                <ul className="card card-body mb-3">
                    <li className="list-group-item">
                        Email: {email}
                    </li>
                    <li className="list-group-item">
                        Tél: {tel}
                    </li>
                </ul>
            }
        </div>
    )
}
