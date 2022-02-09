const bodyParser = require('body-parser')

const funcionario = require('./funcionariosRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        bodyParser.urlencoded({extended: false}),
        funcionario
    )
}