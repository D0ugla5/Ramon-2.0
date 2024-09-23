require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rota_produto = require('./rotas/rotas-produtos')
const rota_cliente = require('./rotas/rotas-cliente')
const rota_auth = require('./rotas/rotas-autenticacao')
const cookiePaster = require('cookie-parser')

const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')

const swaggerDocument = YAML.load('./docs/documentacao.yaml')

app.use(bodyParser.json())

app.use(cookiePaster())

app.use('/produtos', rota_produto)

app.use('/clientes', rota_cliente)

app.use('/auth', rota_auth)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(8721) //bootstrap

module.exports = app;