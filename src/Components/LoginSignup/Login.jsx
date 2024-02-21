// import React, {useState, useEffect } from 'react';
import React from 'react';
// import { useNavigate } from 'react-router-dom';

import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

function Login() {
    // const[users, setUser] = useState([]);
    // const navigate = useNavigate();

    return(
        <div>
            <div className=" cnt container-sm">
                <h1 className='mb-3 text-center'>Login</h1>
                <form action="" className="container-md">
                <div class="mb-3">
                    <label for="emailInput" class="form-label">Email <img src={email_icon} alt="email_icon" /></label>
                    <input type="email" class="form-control" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="PasswordInput" class="form-label">Password <img src={password_icon} alt="password_icon" /></label>
                    <input type="password" class="form-control" />
                </div>
                <div className="row justify-content-around">
                    <button type="submit" class="btn btn-primary rounded-pill col-4">Login</button>
                    <button type="submit" class="btn btn-primary rounded-pill col-4">SignUp</button>
                </div>
                </form>
            </div>
        </div>
    );
}

export default Login;