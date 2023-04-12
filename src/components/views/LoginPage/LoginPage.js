import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email: email,
      password: password
    }
    
    dispatch(loginUser(body))
      .then(response => {
        console.log(response.payload)
        if (response.payload.success) {
          navigate('/');
        } else {
          alert('Fail: Please check your email or password.')
        }
      })
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh',
    }}>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <label>Password</label>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <button type='submit'>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage
