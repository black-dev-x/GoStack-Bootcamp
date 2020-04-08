import React from 'react'
import Header from './Header'

export default _ => {
  const projects = ['Desenvolvimento de app', 'Front-end web']
  return (
    <>
      <Header title="ReactJS" />
      <ul>
        {projects.map(project => (
          <li key={project}>{project}</li>
        ))}
      </ul>
    </>
  )
}
