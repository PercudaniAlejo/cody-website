import React from 'react'
import imageChat from '../../img/chatbot-foto-main.png';
import { Link } from 'react-router-dom'


import IniciarChat from './IniciarChatBot'
import FormLogin from './formLogin'

function Login(){
    return(
        <div className="column__login d-flex flex-column p-0 m-0 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="container__login d-flex w-100  flex-column align-items-center justify-content-around">
            <div className="login__header">
                <div className="login__header__container">
                    <h1 className="titleCody"> Cody! </h1>
                    <h3 className="subtitleCody"> Sea parte del futuro </h3>
                </div>
            </div>
            <div className="login">
                <FormLogin />
            </div>
            <div className="container__register">
                <p> ¿Todavía no tenés una cuenta? </p>
                <Link to='/newAccount'> Crear cuenta </Link>
            </div>

            </div>


            <div className="container__empezarChatear d-none container__login w-100  flex-column align-items-center justify-content-around">
                <IniciarChat />
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