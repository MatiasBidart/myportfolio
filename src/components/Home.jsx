import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import logo1 from '../assets/profileimg1.png'
import logo2 from '../assets/profileimg2.png'

const Home = () => {
  return (
    <div>
    <div className=' img-dv'>
    <div className='home-grid'>
      <div className='home-ttle'>
      </div>
      <div className='home-scroll'>
      <a class="scrll-icon" href="#start"></a>
      </div>
    </div>
    </div>
      <section className='align-cntr grid-temp-2-rws'>
        <div className='imagen'>
          <img id='front-img' src={logo1} alt='1' />
          <img className='over' id='back-img' src={logo2} alt='1' />
        </div>
        <div className='texto' >
          <h2 className='profile-ttle'>
            Sobre Mí
          </h2>
          <p className='description'>Me defino como creativo, predispuesto y colaborativo. Amo involucrarme en proyectos que mantengan mi mente activa y me permitan seguir desarrollando habilidades.<br></br><br></br>Entre las herramientas que utilizo para programar se encuentran: <b>React.Js (punto fuerte), Javascript, HTML, CSS, Node.Js, etc.</b></p>
          <div className='align-cntr' >
            <a href='https://drive.google.com/file/d/17kaLlAv8oSchm0bG_3Ww3H2K8V2pk0jR/view?usp=sharing'
            target='blank'
            rel= 'noreferrer noopener'
             ><button><b>Descargar Curriculum Vitae</b></button></a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home