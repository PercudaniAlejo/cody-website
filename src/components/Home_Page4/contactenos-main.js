import React from 'react';

function ConctatMain(){
    return(
        <div className="container__contact">
            <form class="form-contact form-horizontal d-flex flex-column align-items-center m-0">
                <div className="title__contact">
                    <h1> CONTACTO </h1>
                </div>
                <div className="formGroup__login form-group">
                    <input type="text" className="form-control-contact form-control d-inline" name="user" placeholder="Nombre" /> 
                </div>
                <div className="formGroup__login form-group">
                    <input type="email" className="form-control-contact form-control d-inline" name="email" placeholder="Email" /> 
                </div>
                <div className="formGroup__login form-group">
                    <input type="text" className="form-control-contact form-control d-inline" name="title" placeholder="Titulo" /> 
                </div>
                <div className="formGroup__login form-group">
                    <textarea className="textareaContact form-control" placeholder="Mensaje..." rows="6"/>
                </div>
                <div className="formGroup__login form-group">
                    <button className="btnContact btn btn-success left"> Enviar </button>
                </div>
            </form> 
        </div>
    );
}

export default ConctatMain;