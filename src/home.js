import React from 'react'
import Carrousel from './components/Home/home-carrousel'
import Login from './components/Home/home-login'

function Home(){
    return(
        <div className="App d-flex p-0 m-0">
            <Carrousel />
            <Login />
        </div>
    );
}

export default Home;