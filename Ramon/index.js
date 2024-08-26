const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rota_produto = require('./rotas/rotas-produtos')
const rota_cliente = require('./rotas/rotas-cliente')

app.use(bodyParser.json())

app.use('/produtos', rota_produto)

app.use('/clientes', rota_cliente)


app.listen(3300) //bootstrap

module.exports = app;