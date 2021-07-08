import React from 'react'
import NewAccountContainer from "../components/NewAccount/formNewAccount"

import Footer from '../components/FOOTER/footer'

const mainNewAccount = () => {
    return (
        <div className = "newAccount d-flex align-items-center justify-content-center flex-column">
            <NewAccountContainer />
            {/* <Footer /> */}
        </div>
    );
}

export default mainNewAccount;