import React from 'react';
import './footer.css';

function Footer(){
    return(
        <div className="container__footer container-fluid d-flex justify-content-center">
            <footer className="footer d-flex align-items-center">
                <div className="container__footer__center">
                    <div className="footer__title">
                        <h5>Sea parte del futuro</h5>
                        <h6>Cody ©2021</h6>
                    </div>

                    <div className="footer__redes d-flex align-items-center">
                        {/* <h4> ICONOS </h4> */}
                        {/* <i class="bi bi-whatsapp"></i> */}
                        {/* <i class="fas fa-cloud"></i> */}
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;