import React from 'react';
import Backendless from 'backendless';

function CRUDRookie() {

    var objToSave = {name: 'Kate', age: 35};

    const saveObject = () => {
        Backendless.Data.of('Person').save(objToSave)
            .then(function (object) {
                console.log('Object has been saved');
                return object;
            })
            .catch(function (error) {
                console.log('Error ' + error.message);
                throw error;
            });
    }

    const getObject = () => {
        Backendless.Data.of('Person').findFirst()
            .then(function (object) {
                console.log('Object has been retrieved');
                console.log(`Name ${object.name}, age ${object.age}`);
                return object;
            })
            .catch(function (error) {
                console.log('Error ' + error.message)
                throw error;
            })
    }

    const updateObject = () => {
        Backendless.Data.of('Person').findFirst()
            .then(function (object) {
                object.age = 75
                Backendless.Data.of('Person').save(object)
                    .then(function (savedObject) {
                        console.log('Object has been updated');
                    })
                    .catch(function (error) {
                        console.log('Error updating object ' + error.message);
                        throw error;
                    });
            })
            .catch(function (error) {
                console.log('Error ' + error.message);
                throw error;
            })
    }

    const deleteObject = () => {
        Backendless.Data.of('Person').findFirst()
            .then(function (object) {
                Backendless.Data.of('Person').remove(object)
                    .then(function (savedObject) {
                        console.log('Object has been removed! ');
                    })
                    .catch(function (error) {
                        console.log('Error removing object ' + error.message);
                        throw error;
                    });
            })
            .catch(function (error) {
                console.log('Error retrieving object ' + error.message);
                throw error;
            })
    }
    return (
        <div className='crud-rookie-container'>
            <h5>CRUD Rookie</h5>
            <button onClick={saveObject}>Save Object</button>
            <button onClick={getObject}>Get Object</button>
            <button onClick={updateObject}>Update Object</button>
            <button onClick={deleteObject}>Delete Object</button>
        </div>
    )
};

export default CRUDRookie;