import React from 'react'
import Carrousel from './carrousel'

function HomeLeft(){
    return(
        <div className="column__carrousel col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <div className="container__carrousel">
               <Carrousel />
            </div>

            <div className="aboutCody__container">
            </div>
        </div>
    )
}

export default HomeLeft;