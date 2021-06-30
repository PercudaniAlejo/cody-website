import React from 'react'
import TeamWorkPNG from '../../img/teamwork-main-1.png'

function TeamWorkIMG() {
    return(
        <div className="container__img col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <div className="imageTeamWork">
                <img src={TeamWorkPNG} alt="teamworkPNG"/>
            </div>
        </div>
    );
}

export default TeamWorkIMG;