const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controlador-produtos')
const { validadorDeCokie } = require('../middlewares/validadorDeCookie')


router.get('', validadorDeCokie,controlador.listProdutos)
router.get('produtos/:id',validadorDeCokie, controlador.getProduto)
router.post('', validadorDeCokie, controlador.createProduto)
router.post('/:id', validadorDeCokie, controlador.updateProduto)
router.delete('/:id', validadorDeCokie, controlador.deleteProduto)

module.exports = router;