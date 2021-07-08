import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Profile extends Component {
    render(){
        return(
            <div className="container__header__text d-flex align-items-center flex-column">
                <Link to="/" className="text-decoration-none link-dark">
                    <p className="m-0"> Cody </p>
                </Link>
                <h5> Mi perfil</h5>                
            </div>
        );
    }
}