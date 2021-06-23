import React from 'react'

function Login(){
    return(
        <div className="column__login row justify-content-center align-items-center m-0">
        <div className="container__login row align-item-end">
            <div className="login__header">
                <div className="login__header__container">
                    <h1 className="titleCody"> Cody! </h1>
                    <h3 className="subtitleCody"> Sea parte del futuro </h3>
                </div>
            </div>
            <div className="login">
               <form class="form-horizontal m-0">
                   <div className="form-group">
                        <input type="text" className="form-control d-inline" name="user" placeholder="Usuario" /> 
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control d-inline" name="psw" placeholder="Contraseña" /> 
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success left"> Ingresar </button>
                    </div>
                </form> 
            </div>
            <div className="container__register">
                <p> ¿Todavía no tenés una cuenta? </p>
                <a href="#"> Crear cuenta </a>
            </div>
        </div>
        </div>
    );
}

export default Login;