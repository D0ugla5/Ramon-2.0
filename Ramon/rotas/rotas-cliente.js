const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controlador-cliente')
const { validadorDeCokie } = require('../middlewares/validadorDeCookie')


router.get('', validadorDeCokie,controlador.listClientes)
router.get('/:id', validadorDeCokie, controlador.getClientes)
router.post('', validadorDeCokie, controlador.createClientes)
router.post('/:id', validadorDeCokie, controlador.updateClientes)
router.delete('/:id', validadorDeCokie, controlador.deleteClientes)

module.exports = router;