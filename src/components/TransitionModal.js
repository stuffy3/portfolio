import React from 'react'
import '../css/TransitionModal.css'

function TransitionModal(props) {
  return (
    <div className='Main-Modal-Content'>
        <div className='Main-Modal-Content-Text'>
            <h1>{props.name}</h1>
        </div>
    </div>
  )
}

export default TransitionModal