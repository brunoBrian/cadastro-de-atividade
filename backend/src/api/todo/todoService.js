const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete']) // Criando APIREST
Todo.updateOptions({new: true, runValidators: true}) // Sem ela os registros não são atualizados e o validador (se o campo é required na tabela do BD) não funciona no update

module.exports = Todo