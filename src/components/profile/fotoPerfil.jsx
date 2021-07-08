import React, { Component } from 'react'
import foto from '../../img/fotoPerfilCody.png'
import { Link } from 'react-router-dom'


export default class Profile extends Component {
    render(){
        return(
            <div className="container__fotoPerfil d-flex flex-column align-items-center justify-content-center">
                <div className="fotoPerfil d-flex justify-content-center">
                    <img src={foto} alt="asd"/>
                </div>
                <div className="linkModificarImagen">
                    <Link to="/mi-cuenta" className="link-dark">Cambiar imagen</Link>
                </div>
            </div>
        );
    }
}