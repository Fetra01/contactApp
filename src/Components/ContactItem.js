import React, { useState } from 'react';

export default function ContactItem({contact}) {
    
    const [show, setShow] = useState(true);
    

    return (
        <div className="card card-body mb-3 text-center">
            <h4>{contact.nom} &nbsp; <i className="fas fa-sort-down" style={{cursor: "pointer"}} onClick={() => setShow(!show)}></i></h4>
            {show ? null :
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
    )
}
