import React, { Component } from 'react'

export default class Profile extends Component {
    render(){
        return(
            <div className="container__cambiarPSW w-75">
                <h4> Cambiar contraseña </h4>
                <div className="psw_actual form-group d-flex">
                    <input type="password" className="form-control" name="pswActual" placeholder="Contraseña actual" />
                </div>

                <div className="psw_nueva form-group d-flex">
                    <input type="password" className="form-control" name="pswNueva" placeholder="Nueva contraseña" />
                </div>
                
                <div className="psw_nueva form-group d-flex">
                    <input type="password" className="form-control" name="pswConfirmacion" placeholder="Confirmar contraseña" />
                </div>
                
                <div className="btn_aceptarNuevaPSW form-group d-flex justify-content-end">
                    <button className="btn btn-primary"> Confirmar </button>
                </div>
            </div>
        );
    }
}