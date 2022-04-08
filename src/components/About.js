import React, { useState } from 'react'
import NavBar from './NavBar'
import '../css/About.css'


function About() {
    const [positionY, setPositionY] = useState(0)
    const [positionX, setPositionX] = useState(0)
    
     document.addEventListener("mousemove", parallax);
        // Magic happens here
        function parallax(e) {
            let _w = window.innerWidth/2;
            let _h = window.innerHeight/2;
            let _mouseX = e.clientX;
            let _mouseY = e.clientY;
            let xPosition = `${(_mouseX - _w) * 0.001}%` 
            let yPosition = `${(_mouseY - _h) * 0.001}%`;
            setPositionX(xPosition);
            setPositionY(yPosition)
        }
        

  return (
    <div className='About' onMouseMove={(e)=> parallax(e.target.value)}>
         <div className='About-Main-Content'>
                <div>
                    <NavBar />
                </div>
             <div className='About-Inner-Content'> 
                <div className='Small-Rect-Container' style={{
                    background: 'white',
                    marginLeft: positionX,
                    marginTop: positionY 
                }}>
                    <div className='Small-Rect-Container-Photo'>
                        
                    </div> 
                    <hr
                     style={{
                        marginTop: '20px',
                        width: '80%',
                        backgroundColor: 'rgba(200,200,200, 0.5)',
                        height: '2px',
                        position: 'top'
                    }}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About