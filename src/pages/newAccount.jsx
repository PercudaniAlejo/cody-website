import React from 'react'
import NewAccountContainer from "../components/NewAccount/formNewAccount"

import Footer from '../components/FOOTER/footer'

const mainNewAccount = () => {
    return (
        <div className = "newAccount d-flex align-items-center justify-content-end flex-column">
            <NewAccountContainer />
            <Footer />
        </div>
    );
}

export default mainNewAccount;