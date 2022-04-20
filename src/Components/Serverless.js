import React, { useState } from 'react'
import Backendless from 'backendless';
import { addItem } from '../Utils/controller';


function Serverless() {

    const [instructions, setInstructions] = useState("");

    const getInst = () => {
        Backendless.CodelessShoppingCartService.getInstructions()
            .then(function (response) {
                console.log(response)
            })
    }

    const plusItem = () => {
        addItem()
    }

    return (
        <div className='serverless-container'>
            <h5>Serverless</h5>
            <button onClick={getInst}>Press</button>
            <button onClick={plusItem}>Add Item</button>
        </div>
    )
};

export default Serverless;