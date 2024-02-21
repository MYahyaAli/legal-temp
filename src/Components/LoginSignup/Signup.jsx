import React from 'react'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

function Signup (){
  return (
    <div className='cnt container-sm'>
      <h1 className='mb-3 text-center'>Sign Up</h1>
      <form className='container-md'>
        <div className="link">
          {/* login through gmail or outlook */}
        </div>
        <div class="mb-3">
          <label for="userNameInput" class="form-label">Username <img src={user_icon} alt="user_icon" /></label>
          <input type="email" class="form-control"/>
        </div>
        <div class="mb-3">
          <label for="emailInput" class="form-label">Email <img src={email_icon} alt="email_icon" /></label>
          <input type="email" class="form-control" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
          <label for="PasswordInput" class="form-label">Password <img src={password_icon} alt="password_icon" /></label>
          <input type="password" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="PasswordCheck" class="form-label">Re-enter Password <img src={password_icon} alt="password_icon" /></label>
          <input type="password" class="form-control" />
        </div>
        <div className="row justify-content-around">
          <button type="submit" class="btn btn-primary rounded-pill col-4">Submit</button>
          <button type="submit" class="btn btn-primary rounded-pill col-4">Login</button>
        </div>
        </form>
    </div>
  );
}

export default Signup;