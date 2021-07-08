import React, { Component } from 'react'

export default class Profile extends Component {
    render(){
        return(
            <div className="container__datosActuales">
                <div className="usuario_actual form-group d-flex flex-column">
                    <label>Usuario</label>
                    <input type="text" className="form-control" name="usuarioActual" value="Nacho" readOnly/>
                </div>
                <div className="email_actual form-group d-flex flex-column">
                    <label>Correo electrónico</label>
                    <input type="email" className="form-control" name="correoActual" value="correo@outlook.com" readOnly/>
                </div>
            </div>
        );
    }
}