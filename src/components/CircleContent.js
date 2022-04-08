import React from 'react'
import{ Link, useNavigate } from 'react-router-dom'

import '../css/CircleContent.css'
import '../css/TransitionModal.css'
function CircleContent() {
 const navigate = useNavigate()
 

  return (
    <div className='Big-Circle'>
        <div className='Inner-Circle'>
            <h1>Hello, my name is Tanner, and I'm a web developer.</h1>
            <button className='Arrow-Btn' onClick={() => navigate('/portfolio/about')} style={{
              textDecoration: 'none',
              scrollBehavior: 'smooth',
              fontSize: 100, 
              backgroundColor: 'white', 
              marginLeft: 30, 
              marginTop: 5}}> 
              ❯
            </button>
        </div>
    </div>
  )
}


export default CircleContent