import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const onClickHandler = () => {
    axios.get('/api/user/logout')
      .then(response => {
        console.log(response)
        if (response.data.success) {
          navigate('/login');
        } else {
          alert('Failed to Logout.')
        }
      });
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh',
    }}>
      <h2>LandingPage</h2>
      
      <button onClick={onClickHandler}>
        Logout
      </button>
    </div>
  )
}

export default LandingPage
