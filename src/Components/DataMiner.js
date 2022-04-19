import React, { useState } from 'react';
import Backendless from 'backendless';

function DataMiner() {

    const [countries, setCountries] = useState([]);

    let whereClause = "Continent = 'Europe' and Population > 10000000";
    let queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(whereClause);

    const retrieveDataWhere = () => {
        Backendless.Data.of('Country').find(queryBuilder)
            .then(function (list) {
                console.log('list has been retrieved')
                console.log(list)
                setCountries(list)
            })
            .catch(function (error) {
                console.log(`Error ` + error.message)
                throw error;
            })
    }

    

    return (
        <div className='data-miner-container'>
            <h5>Data Miner</h5>
            <button onClick={retrieveDataWhere}>Retrive Countries List</button>
            <div className='countries-container'>
                {countries.map((country, idx) => {
                    return <div key={idx} className='country-info-container'>
                                <h6>{country.Name}</h6> 
                                <p>Population: {country.Population}</p>
                            </div>
                })}
            </div>
        </div>
    )
};

export default DataMiner;