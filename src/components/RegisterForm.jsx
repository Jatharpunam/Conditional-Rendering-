import React from 'react'

const RegisterForm = () => {
  return (
    <form className="form-container">
      <h2>Register</h2>
      <div className="form-group">
        <label>Username:</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" />
      </div>
      <button type="submit">Register</button>
    </form>
  )
}

export default RegisterForm
