import React from 'react'
import imageChat from '../../img/chatbot-foto-main.png';
import { Link } from 'react-router-dom'

function Login(){
    return(
        <div className="column__login d-flex flex-column p-0 m-0 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="container__login w-100 d-flex flex-column align-items-center justify-content-around">
            <div className="login__header">
                <div className="login__header__container">
                    <h1 className="titleCody"> Cody! </h1>
                    <h3 className="subtitleCody"> Sea parte del futuro </h3>
                </div>
            </div>
            <div className="login">
               <form class="form-horizontal m-0">
                   <div className="formGroup__login form-group">
                        <input type="text" className="form-control-login form-control d-inline" name="user" placeholder="Usuario" /> 
                    </div>
                    <div className="formGroup__login form-group">
                        <input type="password" className="form-control-login form-control d-inline" name="psw" placeholder="Contraseña" /> 
                    </div>
                    <div className="formGroup__login form-group">
                        <button className="btnLogin btn btn-success left"> Ingresar </button>
                    </div>
                </form> 
            </div>
            <div className="container__register">
                <p> ¿Todavía no tenés una cuenta? </p>
                <Link to='/newAccount'> Crear cuenta </Link>
            </div>

            </div>
            <div className="container__image__chatbot w-100">
                <div className="image__chatbot">
                    <img src={imageChat} alt="imagen"/>
                </div>
            </div>
        </div>
        
    );
}

export default Login;