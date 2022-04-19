import React from 'react'
import Backendless from 'backendless';


function Serverless() {

    const getInst = () => {
        return Backendless.APIServices.invoke('CodelessShoppingCartService', 'getInstructions', null)
    }

    return (
        <div className='serverless-container'>
            <h5>Serverless</h5>
            <button onClick={getInst}>Press</button>
        </div>
    )
};

export default Serverless;