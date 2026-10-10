import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'



const Auth = () => {

  // Changing the UI according to the user input so using use state to preserve and render UI

  const [mode, setMode] = useState("signup")
  const [error, setError] = useState(null);
  const { signup, login, logout, user } = useContext(AuthContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()


  const onSubmit = (data) => {

    setError(null);
    let result;
    if (mode === "signup") {
      result = signup(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }

    if (result.success) {
      navigate('/')
    } else {
      setError(result.error)
    }

  }

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className='page-title'>{mode === 'signup' ? "Sign Up" : "Login"}</h1>

          <form className='auth-form' onSubmit={handleSubmit(onSubmit)}>
            {error && <div className='error-message'>{error}</div>}
            <div className="form-group">
              <label htmlFor="email" className='form-label'>Email</label>
              <input type="email" id="email" className='form-input' {...register('email', { required: "Email is required" })} />
              {errors.email && (
                <span className='form-error'> {errors.email.message}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password" className='form-label'>Password</label>
              <input {...register('password', {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                },
                maxLength: {
                  value: 12,
                  message: "Password must be at most 12 characters"
                }
              },)}

                type="password" id="password" className='form-input' />
              {errors.password && (
                <span className='form-error'>{errors.password.message}</span>
              )}
            </div>
            <button type='submit' className='btn btn-primary btn-large'>
              {mode === 'signup' ? "Sign Up" : "Login"}
            </button>
          </form>
          <div className="auth-switch">
            {mode === 'signup' ?
              <p>Already have an account ? <span onClick={() => setMode('login')} className='auth-link' >Login</span></p>
              :
              <p>Don't have an account ? <span onClick={() => setMode('signup')} className='auth-link' >Sign Up</span></p>}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
