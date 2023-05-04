import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

function RegisterPage(props) {
  const navigate = useNavigate();
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
          navigate('/');
        } else {
          alert('Failed to sign up.');
        }
      })
  }

  return (
    <div className='wrap'>
      <div className='register'>
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>

          <div className='register_label'>
            <label>Email</label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className='register_label'>
            <label>Name</label>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className='register_label'>
            <label>Password</label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className='register_label'>
            <label>Comfirm Password</label>
            <input type='password' value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
          </div>

          <button className='registerBtn' type='submit'>
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
