import React, { useState, useRef } from 'react'
import './register.scss'

const Register = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleStart = () => setEmail(emailRef.current.value)
  const handleFinish = () => setPassword(passwordRef.current.value)

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo" className='logo' />
          <button className="loginButton">Sign In</button>
        </div>

      </div>
      <div className="container">
        <h1>Unlimited Movies, TV Shows and More.</h1>
        <h2>Watch Anywhere, Cancel Anytime !</h2>
        <p>
          Ready to watch? Enter your email adress to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email Address" ref={emailRef}/>
            <button className="registerButton" onClick={handleStart}>Get Started</button>
          </div>
        ) : (
          <div className="input">
            <input type="password" placeholder="Password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>Start</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Register
