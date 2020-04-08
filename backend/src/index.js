const express = require('express')
const { uuid } = require('uuidv4')
const app = express()
app.use(express.json())

let projects = []

const debugRequest = (request, _, next) => {
  const { method, url } = request
  const logText = `[${method.toUpperCase()} ${url}]`
  console.log(logText)
  next()
}
const log = (request, _, next) => {
  console.log('requisição feita')
  next()
}
app.use(log)

app.get('/projects', debugRequest, (request, response) => {
  const { title } = request.query
  const result = title
    ? projects.filter(project => project.title.includes(title))
    : projects
  response.json(result)
})

app.post('/projects', (request, response) => {
  const newProject = { id: uuid(), ...request.body }
  projects.push(newProject)
  response.json(newProject)
})

app.put('/projects/:id', (request, response) => {
  const { id } = request.params
  const updatedProject = request.body
  const index = projects.findIndex(project => project.id == id)
  if (index == -1) {
    return response.status(400).json({ error: 'Product not found' })
  }
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
