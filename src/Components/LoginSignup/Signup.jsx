import React, { useState } from 'react'
import { Link } from "react-router-dom";
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import validation from './Validation';

function Signup (){

    const[values, setValues] = useState({
        name:'',
        email:'',
        password:''
      })

      const [errors, setErrors] = useState({})

      const handleInput= (event) =>{
          setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
      }

      const handleSubmit= (event) =>{
          event.preventDefault();
          setErrors(validation(values));
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className='cnt container-sm'>
        <h1 className='mb-3 text-center'><strong>Sign Up</strong></h1>
        <form className='container-md' onSubmit={handleSubmit}>
          <div className="link">
            {/* login through gmail or outlook */}
          </div>
          <div class="mb-3">
            <label for="userNameInput" class="form-label">Username <img src={user_icon} alt="user_icon" /></label>
            <input type="email" class="form-control" name="name" placeholder='Enter Username' onChange={handleInput}/>
            {errors.name && <span className='text-danger'>{errors.name}</span>}
          </div>
          <div class="mb-3">
            <label for="emailInput" class="form-label">Email <img src={email_icon} alt="email_icon" /></label>
            <input type="email" class="form-control" aria-describedby="emailHelp" name="email" placeholder='Enter Email' onChange={handleInput}/>
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div class="mb-3">
            <label for="PasswordInput" class="form-label">Password <img src={password_icon} alt="password_icon" /></label>
            <input type="password" class="form-control" name='password' placeholder='Enter Password'onChange={handleInput}/>
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          {/* <div class="mb-3">
            <label for="PasswordCheck" class="form-label">Re-enter Password <img src={password_icon} alt="password_icon" /></label>
            <input type="password" class="form-control" name='reset-password' placeholder='Re-Enter Password' onChange={handleInput} />
          </div> */}
          <div className="row justify-content-around">
            <button type="submit" class="btn btn-success rounded-pill col-4">Submit</button>
            <Link to="/" class="btn btn-default rounded-pill col-4 border">Login</Link>
          </div>
          </form>
      </div>
    </div>
  );
}

export default Signup;