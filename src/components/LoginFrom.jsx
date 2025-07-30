import React from 'react'

const LoginFrom = () => {
  return (
    <form className="form-container">
      <h2>Login Form</h2>
      <div className="form-group">
        <label>Username:</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginFrom
