import axios from 'axios'
import React, { useEffect } from 'react'

function LandingPage() {

  const onClickHandler = () => {
    axios.get('/logout')
      .then(response => console.log(response));
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
