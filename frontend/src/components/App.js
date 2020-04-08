import React, { useState, useEffect } from 'react'
import Header from './Header'
import api from '../services/api'
import './App.css'

export default _ => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    api.get('projects').then(response => setProjects(response.data))
  }, [])
  const addProject = () => {
    const newProject = { title: 'titulo legal', owner: 'DevX' }
    api.post('projects', newProject).then(response => {
      setProjects([...projects, response.data])
    })
  }
  return (
    <>
      <Header title="ReactJS" />
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
      <button onClick={addProject}>Adicionar projeto</button>
    </>
  )
}
