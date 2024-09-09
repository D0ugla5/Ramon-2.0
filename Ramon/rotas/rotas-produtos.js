const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controlador-produtos')


router.get('', controlador.listProdutos)
router.get('produtos/:id', controlador.getProduto)
router.post('', controlador.createProduto)
router.post('/:id', controlador.updateProduto)
router.delete('/:id', controlador.deleteProduto)

module.exports = router;