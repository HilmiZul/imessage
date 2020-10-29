import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import './Login.css'

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider)
    .catch((e) => alert(e.message))
  }

  return (
    <div className='login'>
      <div className='login__logo'>
        <img 
        src='https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png'
        alt=''
        />
        <h1>iMessage Clone</h1>
        <h3>by Zul Hilmi</h3>
      </div>

      <Button onClick={signIn}>Sign in</Button>
    </div>
  )
}

export default Login
