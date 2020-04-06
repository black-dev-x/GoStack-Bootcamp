const express = require('express')

const app = express()

const projetos = ['projeto 1', 'projeto 2', 'projeto 3']

app.get('/projetos', (requisicao, resposta) => {
  resposta.json(projetos)
})

app.post('/projetos', (requisicao, resposta) => {
  resposta.json(projetos)
})

app.put('/projetos/:id', (requisicao, resposta) => {
  resposta.json(projetos)
})

app.delete('/projetos/:id', (requisicao, resposta) => {
  resposta.json(projetos)
})

app.listen(3333, () => console.log('(╯°□°）╯︵ ┻━┻ Servidor esta rodando'))
//Sabia que ao utilizar a tecla do Windows + Ponto, você abre aqui no visual studio
//um menu para adicionar emotes? 🐱‍👤
