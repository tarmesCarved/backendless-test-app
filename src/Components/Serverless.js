import React, { useState } from 'react'
import Backendless from 'backendless';
import { addItem } from '../Utils/controller';
import axios from 'axios';

function Serverless() {

    const [instructions, setInstructions] = useState("");

    const sampleOrder = {
        "cartName": ""
    }

    const getInst = () => {
        Backendless.CodelessShoppingCartService.getInstructions()
            .then(function (response) {
                console.log(response)
            })
    }

    const axiosGetInstructions = () => {
        axios.get('https://grownmountain.backendless.app/api/services/CodelessShoppingCartService/Instructions')
            .then(response => {
                console.log(response)
                setInstructions(response.data)
            })
            .catch(error => {
                console.log('error: ' + error.message)
            })
    }

    const plusItem = () => {
        addItem()
    }

    return (
        <div className='serverless-container'>
            <h2>Serverless</h2>
            <p>{instructions}</p>
            <button onClick={getInst}>Press</button>
            <button onClick={axiosGetInstructions}>Axios fetch</button>
            <button onClick={plusItem}>Add Item</button>
        </div>
    )
};

export default Serverless;