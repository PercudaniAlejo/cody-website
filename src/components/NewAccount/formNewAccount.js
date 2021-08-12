import React, { Component } from 'react'
import Title from './titleNewAccount';

import axios from 'axios'

const validate = values => {
    const errors = {}
    if(!values.usuario) 
        errors.usuario = 'Este campo es obligatorio'
    if(!values.psw) 
        errors.psw = 'Este campo es obligatorio'
    if(!values.email) 
        errors.email = 'Este campo es obligatorio'
    return errors
}
let usuario = "";
let email = "";
let psw = "";
export default class containerNewAccount extends Component {
    state = {
        errors: {}
    }

    handleChange = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value})
        console.log({ [name]: value})
        if (name === 'usuario')
            usuario = value;
        else if (name === 'email')
            email = value;
        else if (name === 'psw')
            psw = value
    }

    handleSubmit = e => {
        e.preventDefault();
        const { errors, ...sinErrors } = this.state
        const result = validate(sinErrors)
       
        this.setState({ errors: result })
        if(!Object.keys(result).length) {
            console.log('Form Valido')   
            e.target.reset() 
            var object = {
                user: usuario,
                email: email,
                password: psw
            }
        }
        console.log (object)
        // let objectJSON = JSON.stringify(object);
        
        axios.post(`http://localhost:3000/`, { object })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })

    }
    render() {
        const { errors } = this.state
        return (
        <div className="container__newAccount d-flex flex-column align-items-center justify-content-center
                        col-lg-3 col-md-6 col-sm-8 col-xs-12"> 
                <Title />
                <div className="login__newAccount login d-flex justify-content-center ">
                   <form onSubmit={this.handleSubmit} class="form-horizontal d-flex justify-content-between flex-column m-0 col-lg-10 col-md-11 col-sm-12 col-xs-12">
                       <div className="form-group__newAccount form-group">
                            {errors.usuario && <p> {errors.usuario} </p>}
                            <input type="text" onChange={this.handleChange} 
                                   className="form-control-login form-control d-inline" 
                                   name="usuario" placeholder="Nombre de usuario" /> 
                        </div>
                        <div className="form-group__newAccount form-group">
                            {errors.email && <p> {errors.email} </p>}
                            <input type="email" onChange={this.handleChange} 
                                   className="form-control-login form-control d-inline"
                                   name="email" placeholder="Correo electrónico" /> 
                        </div>
                        <div className="form-group__newAccount form-group">
                            {errors.psw && <p> {errors.psw} </p>}
                            <input type="password" onChange={this.handleChange}
                                   className="form-control-login form-control d-inline" 
                                   name="psw" placeholder="Contraseña" autoComplete="on" /> 
                        </div>
                        <div className="form-group__newAccount form-group d-flex justify-content-end">
                            <button className="btnLogin__newAccount btn btn-success left"> Ingresar </button>
                        </div>
                    </form> 
        </div>
    </div>
        );
        }
}
