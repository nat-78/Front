import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navegation extends Component {

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/"> Universidad </  Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                           <Link className="nav-link" to="/">Tutoriales</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/agregar">Agregar Tutoriales</Link>
                        </li>
                    
                    </ul>
                </div>
            </nav>

        );
    }
}
