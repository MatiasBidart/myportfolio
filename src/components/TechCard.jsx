import React from 'react'
import './components.stylesheets/TechCard.css'



const TechCard = (data) => {
    const description = data.data.description
  return (
    <div>
        <div className='card'>
            <div className='align-cntr'>
                <img className='card-logo' src={data.data.iconUrl} alt={data.data.name} />
            </div>
            <ul>
                {description.map(desc => {
                    return <li key={desc} >{desc}</li>
                })}
                {/* <li>Desarrollo de aplicaciones con el uso de herramientas como Redux Toolkit, Redux Thunk, React Router DOM, etc.</li>
                <li>Manejo de peticiones HTTP</li>
                <li>Desarrollo de Custom Hooks propios y componentes</li>
                <li>Modelos escalables y economía de recursos</li> */}
            </ul>
        </div>
    </div>
  )
}

export default TechCard