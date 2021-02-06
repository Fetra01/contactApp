import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { addContact } from '../Redux/actions';

export default function ContactForm() {

    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");

    const dispatch = useDispatch();

    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch(addContact(
            {
                id: Math.floor(Math.random() * 1000),
                nom: nom,
                email: email,
                tel: tel
            }
        ))
        setNom("");
        setEmail("");
        setTel("");

        
    }

    return (
        <div className="card mb-3">
            <div className="card-header">Ajouter un Contact</div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="nom">Nom</label>
                        <input
                            type= "text"
                            name= "nom"
                            className= "form-control form-control-lg"
                            placeholder= "Entrer un Nom..."
                            value= {nom}                            
                            onChange= {(e) => setNom(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            className="form-control form-control-lg"
                            placeholder="Entrer un mail..."
                            value={email}
                            onChange= {(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tel">Télephone</label>
                        <input
                            type="text"
                            name="tel"
                            className="form-control form-control-lg"
                            placeholder="Entrer un télephone..."
                            value={tel}
                            onChange= {(e) => setTel(e.target.value)}
                        />
                    </div>
                    <button
                        className="btn btn-block btn-primary"
                        onClick={(e) => handelSubmit(e)}
                    >Ajouter un Contact</button>
                </form>
            </div>
        </div>
    )
}
