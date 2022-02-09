const database = require('../models')
const SerializadorFuncionario = require('../helpers/Serializador')

class FuncionarioController {

    static async criarFuncionario(req, res) {
        const requisicao = req.body
        try {
            const novoFuncionario = await database.Funcionarios.create(requisicao)
            return res.status(200).json(novoFuncionario)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async listarFuncionario(req, res) {
        try {
            const listarTodos = await database.Funcionarios.findAll()
            return res.status(200).json(listarTodos)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async listarPorId(req, res) {
        try{
            const idFuncionario = parseInt(req.params.id) 
            const resultado = await database.Funcionarios.findOne({ where: { id: idFuncionario}})
            return res.status(200).json(resultado)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async calcularImposto(req, res) {
        try {
            const idFuncionario = req.params.id
            const resultado = await database.Funcionarios.findOne({where: {id: idFuncionario}})
            
           if(resultado.salario <= 2000) {
               const mensagem = `Funcionario isento de imposto`
               res.status(200)
               res.send(mensagem)
           }

           if(resultado.salario >= 2000 && resultado.salario <= 3500) {
               const mensagem = `Funcionario pagará 15% de imposto`
               res.status(200)
               res.send(mensagem)
           }

           if(resultado.salario >= 3501 && resultado.salario <= 5000) {
               const mensagem = `Funcionario pagará 22% de imposto`
               res.status(200)
               res.send(mensagem)
           }

           if(resultado.salario > 5000) {
               const mensagem = `Funcionario pagará 30% de imposto`
               res.status(200)
               res.send(mensagem)
           }
           
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = FuncionarioController