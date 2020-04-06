const express = require('express')

const app = express()
app.use(express.json())

let projects = []
let count = 1

app.get('/projects', (request, response) => {
  response.json(projects)
})

app.post('/projects', (request, response) => {
  const newProject = { id: count++, ...request.body }
  projects.push(newProject)
  response.json(newProject)
})

app.put('/projects/:id', (request, response) => {
  const { id } = request.params
  const updatedProject = request.body
  const index = projects.findIndex(project => project.id == id)
  projects[index] = updatedProject
  response.json(updatedProject)
})

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params
  projects = projects.filter(project => project.id != id)
  response.json(projects)
})

app.listen(3333, () => console.log('(╯°□°）╯︵ ┻━┻ Servidor esta rodando'))
//Sabia que ao utilizar a tecla do Windows + Ponto, você abre aqui no visual studio
//um menu para adicionar emotes? 🐱‍👤
