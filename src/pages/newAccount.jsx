import React from 'react'
import NewAccountContainer from "../components/NewAccount/formNewAccount"


const mainNewAccount = () => {
    return (
        <div className = "newAccount d-flex align-items-center justify-content-center flex-column">
            <NewAccountContainer />
        </div>
    );
}

export default mainNewAccount;