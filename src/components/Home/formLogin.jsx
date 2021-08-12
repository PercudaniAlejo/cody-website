import React, { Component } from 'react'

const validate = values => {
    const errors = {}
    if(!values.name) 
        errors.name = 'Este campo es obligatorio'
    if(!values.psw) 
        errors.psw = 'Este campo es obligatorio'
    return errors
}

export default class FormLogin extends Component {
    state = {
        errors: {}
    }
    
    handleChange = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { errors, ...sinErrors } = this.state
        const result = validate(sinErrors)
        this.setState({ errors: result })
        if(!Object.keys(result).length) {
            console.log('Form Valido')   
            e.target.reset() 
        }
    }

    render() {
        const { errors } = this.state
        return (
        <form onSubmit={this.handleSubmit} >
            <div className="formGroup__login form-group">
                {errors.name && <p> {errors.name} </p>}
                <input type="text" 
                        onChange={this.handleChange} 
                        className="form-control-login form-control d-inline"
                        name="name" placeholder="Usuario" /> 
            </div>
            <div className="formGroup__login form-group">
                {errors.psw && <p> {errors.psw} </p>}
                <input type="password" 
                        className="form-control-login form-control d-inline"
                        onChange={this.handleChange} 
                        name="psw" placeholder="Contraseña" /> 
            </div>
            <div className="formGroup__login form-group">
                <input type="submit" className ="btnLogin btn btn-primary left" value="Ingresar" />
                {/* <button className="btnLogin btn btn-success left" type="submit"> Ingresar </button> */}
            </div>
        </form> 
        )
    }
}