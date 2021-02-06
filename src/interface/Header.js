import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-primary mb-3 py-0">
                <div className="container">
                    <a href="/" className="navbar-brand">App Contacts</a>
                    <ul className="navbar-nav d-inline-block">
                        <li className="nav-item d-inline-block mr-2">
                            <Link to="/accueil" className="nav-link">Accueil</Link>
                            
                        </li>
                        <li className="nav-item d-inline-block mr-2">
                            <Link to="/ajouter" className="nav-link">Ajouer Contact</Link>
                        </li>
                        <li className="nav-item d-inline-block mr-2">
                            <a href="/" className="navbar-brand">À-Propos</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}
