module.exports = function(req, res, next) {
  	res.header('Access-Control-Allow-Origin', '*') // Qualquer um acessa o site. Se quiser que só determinada url acesse, basta colocar no lugar de *
  	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE') // Métodos que serão permitidos
  	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next()
}