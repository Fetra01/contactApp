import React, { useEffect, useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getContact, updateContact } from '../Redux/actions/contactActions';

export default function ContactEdit() {
    let {id} = useParams();
    let history = useHistory();
    let dispatch = useDispatch();
    const contact = useSelector(state => state.contact.contact);
    const [nom, setNom] = useState();
    const [tel, setTel] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {
        if(contact !== null){
            setNom(contact.nom);
            setTel(contact.tel);
            setEmail(contact.email);
        }

        dispatch(getContact(id));
    }, [contact]);

    const onUpdateContact = (e) => {
        e.preventDefault();

        const update_contact = Object.assign(contact, {
            nom: nom,
            tel: tel,
            email: email,
        });

        dispatch(updateContact(update_contact));

        history.push("/");
    }
    return (
        <div className="card mb-3">
            <div className="card-header">
                <h1>Modifier Contact</h1>
            </div>
            <div className="card-body">
                <form onSubmit={(e) => onUpdateContact(e)}>
                    <div className="form-group">
                        <label htmlFor="nom">Nom</label>
                        <input
                            type="text"
                            name="nom"
                            className="form-control form-control-lg"
                            placeholder="Entrer un Nom ..."
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tel">Télphone</label>
                        <input 
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Entrer un Numéro de Téléphone ..."
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Entrer un Adresse mail ..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-block  btn-primary">Modifier</button>
                </form>
            </div>
        </div>
    )
}
