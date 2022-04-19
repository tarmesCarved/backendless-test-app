import React from 'react'
import Backendless from 'backendless';

function UserRookie() {

    var email = "james.bond@mi6.co.uk"
    var password = "supe3rs3cre3t"

    var user = new Backendless.User();
    user.email = email;
    user.password = password;

    const newUser = () => {
        Backendless.UserService.register(user)
            .then(function (user) {
                console.log( "user has been registered!");
            })
            .catch(function (error) {
                console.log( 'error - ' + error.message);
            });
    }

    const loginUser = () => {
        Backendless.UserService.login( email, password )
            .then(function (user) {
                console.log('user has logged in');
            })
            .catch(function (error) {
                console.log('error - ' + error.message)
            })
    }

    return (
        <div className='user-rookie-container'>
            <h5>User Rookie</h5>
            <button onClick={newUser}>New User</button>
            <button onClick={loginUser}>Login User</button>
        </div>
    )
};

export default UserRookie;