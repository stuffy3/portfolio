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
                    <div className='Small-Rect-Container-Text'>
                        
                        I've been in the business of creating ever since I could climb up on a piano bench and charismatically mash 
                        the keys of a piano. That charisma and love of creating has taken me to pursue music composition, art and now, 
                        web development. Since my decision to attend and graduate from the coding bootcamp, DevMountain, 
                        I've been obsessed with learning and creating things using JavaScript, HTML and CSS. When I'm not learning or creating,
                        I'm probably hanging out with my wife, watching the stock market or messing with a synthesizer.
                            
                    </div>
                </div>
            </div>
        </div>
        <div className='About-Main-Content-Right'>
            <div className='About-Inner-Content-Right'>
                <div className='About-Inner-Content-Right-Header'>
                   <h1>Here's what I know...</h1>
                   <hr
                     style={{
                        marginTop: '10px',
                        marginBottom: '10px',
                        width: '80%',
                        backgroundColor: 'rgba(200,200,200, 0.5)',
                        height: '2px',
                        position: 'top'
                    }}
                    />
                </div>
                   <div className='About-Inner-Content-Right-Icons'>
                       <div className='About-Inner-Content-Right-Icons-Container'>
                           <div className='About-Inner-Content-Right-Icons-Individual'>
                               <h2>JavaScript</h2>
                               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="100" height="100"
                                    viewBox="0 0 48 48"
                                    style={{fill: '#00000'}}><path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                                    <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                                </svg>
                           </div>
                           <div className='About-Inner-Content-Right-Icons-Individual'>
                           <h2>HTML</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="100" height="100"
                                    viewBox="0 0 48 48"
                                    style={{fill: '#000000'}}>
                                    <polygon fill="#e7a42b" points="8,5 42,5 38,39 25,43 11,39"></polygon>
                                    <polygon fill="#f2bf22" points="38.63,8 35.25,36.71 25,39.86 25,8"></polygon>
                                    <polygon fill="#faf9f8" points="25,21 26,23 25,25 15.79,25 16.64,12 25,12 26,14 25,16 21.03,16 20.7,21"></polygon>
                                    <polygon fill="#ebebeb" points="24.9,32.57 25,32.54 26,35 25,36.72 24.94,36.74 16.61,34.36 16.05,28 20.07,28 20.35,31.27"></polygon>
                                    <polygon fill="#fff" points="34.07,21 32.5,34.42 25,36.72 25,32.54 28.83,31.36 29.57,25 25,25 25,21"></polygon>
                                    <polygon fill="#fff" points="34.92,18 30.93,18 30.67,16 25,16 25,12 34.13,12 34.3,13.26"></polygon>
                                </svg>
                           </div>
                           <div className='About-Inner-Content-Right-Icons-Individual'>
                               <h2>CSS</h2>
                               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="100" height="100"
                                    viewBox="0 0 48 48"
                                    style={{fill: '#00000'}}>
                                    <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                                    <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                                    <path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path>
                                    <path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                                </svg>
                           </div>
                           <div className='About-Inner-Content-Right-Icons-Individual'>
                               <h2>React</h2>
                           <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="100" height="100"
                                viewBox="0 0 48 48"
                                style={{fill: '#00000'}}>
                                <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path>
                                <path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path>
                                <path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path>
                                <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                            </svg>   
                           </div>
                          
                       </div>
                   </div>
            </div>
        </div>
    </div>
  )
}

export default About