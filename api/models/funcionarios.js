const database = require('./index')

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Funcionarios extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Funcionarios.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    salario: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Funcionarios',
  });
  return Funcionarios;
};