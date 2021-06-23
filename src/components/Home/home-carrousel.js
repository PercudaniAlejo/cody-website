import React from 'react'
import Carrousel from './carrousel'

function HomeLeft(){
    return(
        <div className="column__carrousel">
            <div className="container__carrousel">
               <Carrousel />
            </div>

            <div className="aboutCody__container">
            </div>
        </div>
    )
}

export default HomeLeft;