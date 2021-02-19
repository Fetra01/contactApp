import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addContact } from '../Redux/actions/contactActions';

export default function ContactAdd() {

    const history = useHistory();

    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");

    const dispatch = useDispatch();

    const handelSubmit = (e) => {
        e.preventDefault();
        const new_contact = {
            id: Math.floor(Math.random() * 1000),
            nom: nom,
            email: email,
            tel: tel
        };
        dispatch(addContact(new_contact));

        history.push("/");
    }

    return (
        <div className="card mb-3">
            <div className="card-header">
                <h1>Ajouter un Contact</h1>
            </div>
            <div className="card-body">
                <form onSubmit={(e) => handelSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="nom">Nom</label>
                        <input
                            type= "text"
                            name= "nom"
                            className= "form-control form-control-lg"
                            placeholder= "Entrer un Nom ..."
                            value= {nom}                            
                            onChange= {(e) => setNom(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tel">Télephone</label>
                        <input
                            type="text"
                            name="tel"
                            className="form-control form-control-lg"
                            placeholder="Entrer un Numéro de Téléphone ..."
                            value={tel}
                            onChange= {(e) => setTel(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            className="form-control form-control-lg"
                            placeholder="Entrer un Adresse mail ..."
                            value={email}
                            onChange= {(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button
                        className="btn btn-block btn-primary"
                    >Ajouter un Contact</button>
                </form>
            </div>
        </div>
    )
}
