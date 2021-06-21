import React from 'react'
import Carrousel from './sites/Home/home-carrousel'
import Login from './sites/Home/home-login'

function Home(){
    return(
        <div className="App">
            <div className="container">
                <Carrousel />
                <Login />
            </div>
        </div>
    );
}

export default Home;