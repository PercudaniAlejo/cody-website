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
                    <input type="text" name="user" placeholder="Usuario" /> 
                    <input type="password" name="psw" placeholder="Contraseña"/>
                    <button type="submit"> Ingresar </button>
                </form>
            </div>
        </div>
        </div>
    );
}

export default Login;