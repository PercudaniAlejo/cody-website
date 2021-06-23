import React from 'react'
import HomeLeft from './components/Home/home-carrousel'
import Login from './components/Home/home-login'
import './components/Home/home-initial.css'

function Home(){
    return(
        <div className="App">
            <div className="main d-flex p-0 m-0">
                <HomeLeft />
                <Login />
            </div>
        </div>
    );
}

export default Home;