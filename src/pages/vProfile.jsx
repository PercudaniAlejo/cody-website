import React, { Component } from 'react'

import HeaderPerfil from '../components/profile/Header.jsx' 
import DatosActuales from '../components/profile/datosActuales.jsx'
import FotoPerfil from '../components/profile/fotoPerfil.jsx'
import CambiarContraseña from '../components/profile/cambiarContraseña.jsx'

export default class Profile extends Component {
    render(){
        return(
            <div className="containerPerfil">
                <div className="container__headerPerfil container-fluid d-flex align-items-start justify-content-start w-100">
                    <HeaderPerfil/>
                </div>

                <div className="container__info d-flex justify-content-center align-items-center">
                    <div className="container__info__perfil d-flex row justify-content-between align-items-center">
                        <div className="datos__actuales col-lg-6">
                            <DatosActuales />
                        </div>

                        <div className="foto__perfil col-lg-5">
                            <FotoPerfil />
                        </div>

                        <div className="cambiar__psw">
                            <CambiarContraseña />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}