const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = { // Exporta o objeto com todas as configurações abaixo
    entry: './src/index.jsx', // Ponto de entrada - transformara isso em js para rodar na pag
    output: { // Saida na pasta public com o nome do arquivo chamado app.js
    path: __dirname + '/public',
    filename: './app.js'
    },
    devServer: { //Configuração do devserver, roda na porta 8080 e lerá a pasta puclic (onde contera o index.html)
        port: 8080, 
        contentBase: './public',
    },
    resolve: { // Quando for exportar, deve reconhecer todas as extensões abaixo
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules' // comando modules para acessar a pasta node_modules
        }
    },
    plugins: [ 
        new ExtractTextPlugin('app.css') // nome do arquivo que ira gerar quando fizer o parse dos .css
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/, // parse tanto em .js como .jsx
            loader: 'babel-loader', // pacote a ser usado
            exclude: /node_modules/, // ignora a pasta
            query: {
                presets: ['es2015', 'react'], // aceita essas escritas de codigo
                plugins: ['transform-object-rest-spread'] // plugin TPRS "clona" um array
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/, // Conseguir ler e interpreta (não da erro no webpack) os arquivos e usa o loader file 
            loader: 'file'
        }]
    }
}