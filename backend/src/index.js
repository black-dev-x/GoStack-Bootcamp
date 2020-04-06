const express = require('express')

const app = express()

const projects = ['projeto galinha 2.0']
app.get('/projects', (req, res) => {
  res.json(projects)
})
app.listen(3333, () => console.log('(╯°□°）╯︵ ┻━┻ Servidor esta rodando'))
