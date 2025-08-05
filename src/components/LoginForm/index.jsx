import React from 'react'
import { useState} from "react"
import { useNavigate, Link } from "react-router-dom"
import "./index.css"


function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showSubmitError, setShowSubmitError] = useState(false)
  const [error, setNewError] = useState("")
  const [toast, setToast] = useState(false)
  const [sucMessage, setSucMessage] = useState("")
  const [showErrMsg, setShowErrMsg] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newValidErrors = {}
        // email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            newValidErrors.Email = "Email is required"
        }
        else if (!emailRegex.test(email)) {
            newValidErrors.Email = "Invalid Email format"
        }
        // password
        if (!password) {
            newValidErrors.PasswordHash = "Password is required"
        }
        else if (password.length < 8) {
        newValidErrors.PasswordHash = "Password must be atleast 8 characters"    
        }
        setNewError(newValidErrors)
       
    return Object.keys(newValidErrors).length === 0;
  }

  const handleLogin = async(event) => {
    event.preventDefault()
    
          setSucMessage("login successful")
          navigate("/user-details")
          setToast(true);
          setTimeout(() => {
            setToast(false);
          }, 3000);
          
          setEmail("")              
          setPassword("")
        
    
        setShowErrMsg(true)
        setTimeout(() => {
          setShowErrMsg(false)
      }, 3000);
      setEmail("")
      setPassword("")
    
    
  }



const emailField = () => {
    return (
      <>
        <label className="input-label" htmlFor="email">
          EMAIL
        </label>
        <input
          type="email"
          id="email"
          className="username-input-field"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Enter your Email"
        />
        
      </>
  )
  }
  const passwordField = () => {
    
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password"
        />
      </>
    )
  }
  return (
    <div className="login-form-container">
    <form className="form-container" onSubmit={handleLogin}>
    <h2>Sign In</h2>
        <div className="input-container">{emailField()}
        {error["Email"] && <span className="error">{error["Email"]}</span>}
        </div>
        <div className="input-container">{passwordField()}
        {error["PasswordHash"] && <span className="error">{error["PasswordHash"]}</span>}
        </div>
      <button type="submit" className="login-button">
        Sign In
        </button>
      <p>Not already registered yet? <Link to='/register'>Sign up now.</Link></p>
      {showSubmitError && <p className="error-message">*{errorMsg}</p>}
      {toast && (
          <div className="success-message">
                      {sucMessage}                        
          </div>
        )}  
       {showErrMsg && (
          <div className="failure-message">
                      {sucMessage}                        
          </div>
                )}  
      </form>
  </div>
  )
}

export default LoginForm