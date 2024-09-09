const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rota_produto = require('./rotas/rotas-produtos')
const rota_cliente = require('./rotas/rotas-cliente')
const rota_auth = require('./rotas/rotas-autenticacao')

app.use(bodyParser.json())

app.use('/produtos', rota_produto)

app.use('/clientes', rota_cliente)

app.use('/auth', rota_auth)

app.listen(8721) //bootstrap

module.exports = app;