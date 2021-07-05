import React from 'react';
import Title from './titleNewAccount';

const containerNewAccount = () => {
    return (
        <div className="container__newAccount d-flex flex-column align-items-center justify-content-center
                        col-lg-3 col-md-6 col-sm-8 col-xs-12"> 
                <Title />
                <div className="login__newAccount login d-flex justify-content-center ">
                   <form class="form-horizontal d-flex justify-content-between flex-column m-0 col-lg-10 col-md-11 col-sm-12 col-xs-12">
                       <div className="form-group__newAccount form-group">
                            <input type="text" className="form-control-login form-control d-inline" name="user" placeholder="Nombre de usuario" /> 
                        </div>
                        <div className="form-group__newAccount form-group">
                            <input type="email" className="form-control-login form-control d-inline" name="user" placeholder="Correo electrónico" /> 
                        </div>
                        <div className="form-group__newAccount form-group">
                            <input type="password" className="form-control-login form-control d-inline" name="psw" placeholder="Contraseña" /> 
                        </div>
                        <div className="form-group__newAccount form-group d-flex justify-content-end">
                            <button className="btnLogin__newAccount btn btn-success left"> Ingresar </button>
                        </div>
                    </form> 
        </div>
    </div>
    );
}

export default containerNewAccount;