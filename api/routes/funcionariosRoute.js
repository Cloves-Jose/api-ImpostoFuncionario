const { Router } = require('express')
const FuncionarioController = require('../controllers/FuncionarioController')

const router = Router()

router.post('/funcionarios', FuncionarioController.criarFuncionario)
router.get('/funcionarios', FuncionarioController.listarFuncionario)
router.get('/funcionarios/:id', FuncionarioController.listarPorId)
router.post('/funcionarios/:id', FuncionarioController.calcularImposto)
module.exports = router