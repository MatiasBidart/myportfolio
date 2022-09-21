import React,{useState, useEffect} from 'react'
import './components.stylesheets/ExpSlider.css'
import data from './ProjectInfo.jsx'

const ExperienciaSlider = () => {
    const[counter, setCounter] = useState(0)
    const[projectData, setProjectData]= useState(data[0])

    const handleProject = ()=>{
        if(counter >=2){
            setCounter(0)
        } else {
            setCounter(counter + 1)
        }
    }
    useEffect(() => {
        setProjectData(data[counter])
        console.log('click')
        console.log(projectData.img[0])
    }, [handleProject])
    


  return (
    <div className='grid-tmplt-clmns-2-sldr' >
        <div>
            <div className='mckup'>
            <img className='over' id='uppr-img' src={projectData.img[1]} alt='animated-img' />
            <img id='bckd-img' src={projectData.img[0]} alt='weather-api'/>
            </div>
        </div>
        <div className='descc'>
            <h2 className='project-ttle'>{projectData.name}</h2>
            <h4 id='loco' className='project-sub-ttle'><b>Tecnologías:</b> {projectData.technology}</h4>
            <p className='project-text'>{projectData.description}</p>
        </div>
        <div className='c3 align-cntr' >
            <div className='project-bttn'onClick={()=>handleProject()}>Ver Otro Proyecto</div>
        </div>
    </div>
  )
}

export default ExperienciaSlider