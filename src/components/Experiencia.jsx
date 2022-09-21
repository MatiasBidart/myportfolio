import React from 'react'
import './components.stylesheets/Experiencia.css'
import TechCard from './TechCard'
import data from './Info.jsx'
import ProgCard from './ProgCard'
import progData from './ProgInfo'
import ExperienciaSlider from './ExperienciaSlider'
import Draw from './Draw'
import Footer from './Footer'

const Experiencia = () => {
  return (
    <div className='bg-dv'>
        <section className='uppr-sctn grid-tmplt-2-rws'>
            <div className='align-ttle'>
            <h4 className='tech-ttle' >Tecnologías</h4>
            </div>
            <div className='karma'>
                <div className='flx-dr-tech spc-evnly'>
                    {data.map(
                        tech =>
                        <TechCard data={tech} key={tech.name}/>
                    )}
                </div>
            </div>
            <div className='align-ttle'>
                <h5 className='animated-ttle'>Otras Herramientas...</h5>
            </div>
        </section>
        <section>
        <div className='roju'>
            
            <div className='scnd-clmn'>
             {progData.map(prog => <ProgCard progData={prog} key={prog.name} />)}   
            </div>
        </div>
        <ExperienciaSlider/>
        <div id='draw-dv' >
            <Draw/>
        </div>
        <Footer/>
        
        </section>
    </div>
  )
}

export default Experiencia