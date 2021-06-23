import React from 'react'
import Carrousel from './components/Home/home-carrousel'
import Login from './components/Home/home-login'

function Home(){
    return(
        <div className="App">
            <div className="main d-flex p-0 m-0">
                <Carrousel />
                <Login />
            </div>
        </div>
    );
}

export default Home;