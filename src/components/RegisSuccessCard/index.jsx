import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"
const RegisSuccessCard = () => {
  
 
  return (
    <div className='success-container'>
          <h2 className=''>You've successfully registered in this portal.</h2>
          <h2><Link to='/login'> Click here</Link> to return to the Login Page. </h2>
    </div>
  )
}

export default RegisSuccessCard