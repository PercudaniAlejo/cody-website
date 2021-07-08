import React, { Component } from 'react'
import LoginHeaderTitle from './loginHeader'
import fotoPerfilCody from '../../img/fotoPerfilCody.png'
import { Link } from 'react-router-dom'

// import Profile from '../../pages/vProfile.jsx'

export default class IniciarChat extends Component {
    render(){
        return(
            <div className="container__login d-flex w-100 flex-column align-items-center justify-content-between">
                <LoginHeaderTitle />

                {/* <div className="container__fotoCody"> */}
                <div className="fotoCody">
                    <div className="nomUsuario">
                            <h1> Bienvenido NOMBRE</h1>  {/* BIENVENIDO {NOMBRE}*/}
                    </div>
                    <img src={fotoPerfilCody} alt="fotoCody"/>
                    {/* </div> */}
                </div>

                <div className="buttons d-flex flex-column align-items-center justify-content-center">
                    <div className="btnEmpezarChat__container d-flex align-items-end justify-content-center">
                        <Link to='/' className="row d-flex justify-content-center">
                        <button className="btns btnEmpezarChat btn btn-primary col-lg-8 col-md-8 col-sm-12 col-xs-12">
                               <label> Hablar con Cody </label> 
                        </button>
                        </Link>
                    </div>
                    
                    <div className="btnVerCuenta__container d-flex align-items-center justify-content-center">
                        <Link to='/mi-cuenta' className="row d-flex justify-content-center">
                        <button className="btns btnEmpezarChat btn btn-success col-lg-8 col-md-8 col-sm-12 col-xs-12">
                               <label> Ver cuenta </label> 
                        </button>
                        </Link>
                    </div>

                    <div className="btnLogOut__container d-flex align-items-start justify-content-center">
                        <Link to='/' className="row d-flex justify-content-center">
                        <button className="btns btnEmpezarChat btn btn-danger col-lg-8 col-md-8 col-sm-12 col-xs-12">
                               <label> Cerrar sesión </label> 
                        </button>
                        </Link>
                    </div>

                </div>

            </div>
        )
    }

}