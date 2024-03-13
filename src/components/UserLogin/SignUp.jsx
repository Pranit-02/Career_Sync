import React from 'react'
import './Common.css'
import user_icon from '..//..//../public/images/person.png'
import email_icon from '..//..//../public/images/email.png'
import password_icon from '..//..//../public/images/password.png'

const SignUp = () => {


  return (
    <div className='container'>
      <div className="header">
        <img src="/images/login-logo.svg" alt="" />
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input name ="username" type="text" placeholder='Username' autoComplete='on'/>
        </div>

        <div className="input">
          <img src={email_icon} alt="" />
          <input name="email" type="email" placeholder='Email' autoComplete='on'/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input name="password" type="password" placeholder='Password' autoComplete='on'/>
        </div>
      </div>

      <div className="submit-container">
        <div className="submit">Sign Up</div>
      </div>
      <div className="Account">Already a member ? <a href="/" className='link'>Login</a></div>
    </div>
  )
}

export default SignUp
