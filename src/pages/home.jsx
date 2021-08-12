import React from 'react'
import HomeLeft from '../components/Home/home-carrousel'
import Login from '../components/Home/home-login'
import '../components/Home/home-initial.css'

import TeamWorkIMG from '../components/Home_Page3/TeamWork_image';
import SobreNosotros from '../components/Home_Page3/SobreNosotros';
import ContactMain from '../components/Home_Page4/contactenos-main';

function Home(){
    return(
        <div className="App container-fluid m-0 p-0">
            <div className="container__aboutCody__main main row d-flex container-fluid p-0 m-0 ">
                <HomeLeft />
                <Login />
            </div>
            <div className="container__aboutUs__main main row d-flex container-fluid p-0">
                <TeamWorkIMG />
                <SobreNosotros />
            </div>
            <div className="container__contact__main main row d-flex justify-content-center container-fluid p-0 m-0">
                <ContactMain />
            </div>

        </div>
    );
}

export default Home;