import React, { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Experiencia from './components/Experiencia'
import Home from './components/Home'

function App() {
  const [axisFromY, setAxisFromY] = useState('')


  window.onscroll = function() {
    var y = window.scrollY;
  
    if(y >= 7){
      setAxisFromY('navbar-color')
      console.log(axisFromY)
      console.log(y);
    } else {
      setAxisFromY('')
    }
  };


  return (
    <div className="App">
{/* Header & Navbar */}
    <header className='header'>
      <Link className='linked' to='/' >
      <nav className={'navbar ' + axisFromY }>
        <h2 className='logo'>Matias B. 🍜</h2>
      </nav>
      </Link>
     </header>
     <Home/>
     <Experiencia/>
     
{/* ----------------------------------------------------------------------------- */}
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/experiencia' element={<Experiencia/>} />
      </Routes> */}
    </div>
  )
}

export default App
