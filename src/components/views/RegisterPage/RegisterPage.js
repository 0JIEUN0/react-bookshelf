import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';

function RegisterPage(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (password !== rePassword) {
      return alert('Password and Confirm password are different.')
    }

    let body = {
      name: name,
      email: email,
      password: password
    }
    
    dispatch(registerUser(body))
      .then(response => {
        if (response.payload.success) {
          // move page
          alert('success');
        } else {
          alert('Failed to sign up.');
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

        <label>Name</label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />

        <label>Password</label>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        
        <label>Comfirm Password</label>
        <input type='password' value={rePassword} onChange={(e)=>setRePassword(e.target.value)} />

        <br />
        <button type='submit'>
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterPage
