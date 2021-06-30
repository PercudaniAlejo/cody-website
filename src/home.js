import React from 'react'
import HomeLeft from './components/Home/home-carrousel'
import Login from './components/Home/home-login'
import './components/Home/home-initial.css'

function Home(){
    return(
        <div className="App container-fluid m-0 p-0">
            <div className="main row d-flex container-fluid p-0 m-0 ">
                <HomeLeft />
                <Login />
            </div>
        </div>
    );
}

export default Home;