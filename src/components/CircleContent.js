import React from 'react'
import '../css/CircleContent.css'
function CircleContent() {
  return (
    <div className='Big-Circle'>
        <div className='Inner-Circle'>
            <h1>Hello, my name is Tanner, and I'm a web developer.</h1>
            <button className='Arrow-Btn' style={{fontSize: 100, backgroundColor: 'white', marginLeft: 30, marginTop: 5}}> ❯ </button>
        </div>
    </div>
  )
}

export default CircleContent