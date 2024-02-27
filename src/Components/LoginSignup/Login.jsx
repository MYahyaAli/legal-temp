import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import validation from './Validation'
import axios from 'axios'

function Login() {

    const[values, setValues] = useState({
        email:'',
        password:''
    })
    
    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleInput= (event) =>{
        setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
    }

    const handleSubmit= (event) =>{
        event.preventDefault();
        setErrors(validation(values));
        if (errors.email === ""  && errors.password ==="") {
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data.status === "Success"){
                    navigate('/home')
                }
            })
            .catch(err => console.log(err));
          }
    }
    return(
        <div className='d-flex justify-content-center align-items-center '>
            <div className=" cnt container-sm">
                <h1 className='mb-3 text-center'><strong>Login</strong></h1>
                <form action="" className="container-md" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email <img src={email_icon} alt="email_icon" /></label>
                    <input type="email" className="form-control" name='email' aria-describedby="emailHelp" placeholder='Enter Email' onChange={handleInput}/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="PasswordInput" className="form-label">Password <img src={password_icon} alt="password_icon" /></label>
                    <input type="password" className="form-control" name='password' placeholder='Password' onChange={handleInput}/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <div className="row justify-content-around">
                    <button type="submit" className="btn btn-success rounded-pill col-4">Login</button>
                    <Link to="/signup" className="btn btn-default rounded-pill col-4 border text-decoration-none">SignUp</Link>
                </div>
                </form>
            </div>
        </div>
    );
}

export default Login;