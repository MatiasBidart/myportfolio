import React from 'react'
import './components.stylesheets/Draw.css'
import CanvasDraw from "react-canvas-draw";

const Draw = () => {
  return (
    <div className='father-dv'>
        <div className='background bckgrnd-grid'>
            <h2 id='bye-ttle' >Gracias por la visita!</h2>
            <h3 id='bye-sub-ttle' >antes de irte dibuja un perrito...</h3>
            <div className='react-draw'>
            <CanvasDraw
            canvasWidth={1350}
            hideInterface={false}
            hideGrid={true}
            imgSrc='https://i.postimg.cc/7PzkyztY/background-field.png'
            brushRadius='3'
            brushColor='black'
             />
            </div>
        </div>
    </div>
  )
}

export default Draw