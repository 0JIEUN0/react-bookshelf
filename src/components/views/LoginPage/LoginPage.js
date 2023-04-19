import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

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
                    navigate('/library');
                } else {
                    alert('Fail: Please check your email or password.')
                }
            })
    }

    return (
        <div className='wrap'>
            <img src="/image/handshelf.png" width="15%" />

            <div className='login'>
                <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
                    <div className='login_email'>
                        <h4>Email</h4>
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='login_pw'>
                        <h4>Password</h4>
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button className='loginBtn' type='submit'>
                        Login
                    </button>
                </form>
            </div>

            <div className="register">
                <a href="/register">💡 Register Now</a>
            </div>
        </div>
    )
}

export default LoginPage
