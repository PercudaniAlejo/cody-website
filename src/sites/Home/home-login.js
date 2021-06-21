import React from 'react'

function Login(){
    return(
        <div className="column__login">
        <div className="container__login">
            <div className="login__header">
                <div className="login__header__container">
                    <h1 className=""> Cody! </h1>
                     <h3> Sea parte del futuro </h3>
              </div>
            </div>
            <div className="login">
               <form>
                   <label>Usuario</label>
                    <input type="text" name="user" placeholder="Usuario" /> 
                   <label>Contraseña</label>
                    <input type="password" name="psw" placeholder="Contraseña"/>
                    <button type="submit"> Ingresar </button>
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