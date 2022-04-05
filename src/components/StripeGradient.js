import React from 'react'
import '../css/Gradient.css'
import CircleContent from './CircleContent'
import NavBar from './NavBar'
import '../css/NavBar.css'
function StripeGradient() {

    
  return (
    <div>
        <div className='Main-Content'>
            <div className='Gradient-Transition'>
                <div>
                    <NavBar />
                </div>
            
            <CircleContent />
            </div>
             
            
        </div>
    </div>  
  )
}

export default StripeGradient