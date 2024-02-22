import React from 'react';
import { Link } from "react-router-dom";
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

function Login() {

    return(
        <div className='d-flex justify-content-center align-items-center '>
            <div className=" cnt container-sm">
                <h1 className='mb-3 text-center'><strong>Login</strong></h1>
                <form action="" className="container-md">
                <div class="mb-3">
                    <label htmlFor="email" class="form-label">Email <img src={email_icon} alt="email_icon" /></label>
                    <input type="email" class="form-control" aria-describedby="emailHelp" placeholder='Enter Email'/>
                </div>
                <div class="mb-3">
                    <label htmlFor="PasswordInput" class="form-label">Password <img src={password_icon} alt="password_icon" /></label>
                    <input type="password" class="form-control" placeholder='Password'/>
                </div>
                <div className="row justify-content-around">
                    <button type="submit" class="btn btn-success rounded-pill col-4">Login</button>
                    <Link to="/signup" class="btn btn-default rounded-pill col-4 border text-decoration-none">SignUp</Link>
                </div>
                </form>
            </div>
        </div>
    );
}

export default Login;