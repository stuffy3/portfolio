import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/NavBar.css'
function NavBar() {
  const navigate = useNavigate()
  return (
    <div className='Nav-Bar-Container'>
        <div className='Nav-Bar-Right'>
              <div>
                <button onClick={() => navigate("/portfolio")}>Home</button>
              </div>
              <div>
              <button onClick={() => navigate("/portfolio/about")}>About</button>
              </div>
              <div>
              <button onClick={() => navigate("/portfolio/projects")}>Projects</button>
              </div>
        </div>
    </div>
  )
}

export default NavBar