import React, { useState } from 'react'
import Header from './Header'

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
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
      <button onClick={addProject}>Adicionar projeto</button>
    </>
  )
}
