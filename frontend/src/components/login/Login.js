import './login.css'
import { useState } from 'react'
import loginService from '../../services/login'
import blogService from '../../services/blogs'
import { useNavigate } from 'react-router-dom'


const Login = ({ setloginUser}) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')            //state hook for the username
  const [password, setPassword] = useState('')            //state hook for the password

  const loginHandler = async (event) => {                     // login start
    event.preventDefault()
    try {
      const user = await loginService.login({                 // calls login service which return the login 
        username, password,                                   //  credential and token 
      })
      console.log(user)
      window.localStorage.setItem(                            // store the returned value from the last call
        'loggedBlogappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)                        // set the token for future  with the help of 
      setloginUser(user.name)                                           // set token functin in blogs serveices
      setUsername('')
      setPassword('')
      navigate('/')
    }
    catch (exception) {
      // setNotification("Wrong Username or Password")
      // setTimeout(() => { setNotification('') }, 4000)
      alert("Wrong Username or Password")
    }
  }
  return (
    <div className='login'>
      <h1 className='login-heading'>Log in</h1>
      <p>Don't have an account?</p>
      <div className='container'>
        <form className='left-container' onSubmit={loginHandler}>
          <input type='text' placeholder='User Name' value={username} name='username' onChange={(event) => { setUsername(event.target.value) }}></input>
          <input type='text' placeholder='Password' value={password} name='password' onChange={(event) => { setPassword(event.target.value) }}></input>
          <button type='submit' className='signup-btn'>log in</button>
        </form>
        <div className='horizontal-line'>
          <div className='line'></div>
          <p>or</p>
          <div className='line'></div>
        </div>
        <div className='right-container'>
          <div className='social-btn'>
            <img src='https://developers.google.com/static/identity/images/g-logo.png'></img>
            <p>Continue with Google</p></div>
          <div className='social-btn'>
            <img src='https://wixmp-7ef3383b5fd80a9f5a5cc686.wixmp.com/logos/facebook-logo2.svg'></img>
            <p>Continue with Facebook</p></div>
        </div>
      </div>
    </div>
  )

}

export default Login
