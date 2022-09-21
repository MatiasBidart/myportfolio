import React from 'react'
import './components.stylesheets/ProgCard.css'

const ProgCard = (progData) => {
  const programs = progData.progData
  console.log(programs)
  return (
    <div className='prog-card'>
        <img className='prog-logo' src={programs.iconUrl} alt=''/>
        <h4 className='prog-ttle'>{programs.name}</h4>
    </div>
  )
}

export default ProgCard