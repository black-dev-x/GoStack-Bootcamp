import React, { useState } from 'react'
import Header from './Header'
import './App.css'
import backgroundImage from '../assets/imagem.jpg'

export default _ => {
  const [projects, setProjects] = useState([
    'Desenvolvimento de app',
    'Front-end web'
  ])

  const addProject = () => {
    setProjects([...projects, 'Novo projeto'])
  }
  return (
    <>
      <Header title="ReactJS" />
      <img src={backgroundImage}></img>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
      <button onClick={addProject}>Adicionar projeto</button>
    </>
  )
}
