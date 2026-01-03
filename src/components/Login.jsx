import { useState } from 'react'
import '../App.css'

function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return setError('Email is required')
    if (!password) return setError('Password is required')
    setError('')
    const payload = { email, password }
    if (onLogin) onLogin(payload)
    else console.log('Login submitted', payload)
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Sign in</h2>
      {error && <div className="login-error">{error}</div>}

      <label className="login-label">
        <span>Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
      </label>

      <label className="login-label">
        <span>Password</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
        />
      </label>

      <button className="login-button" type="submit">Sign in</button>
    </form>
  )
}

export default Login
