/*
  Função do node para introduzir o caminho de arquivos
*/
const path = require('path');

// __dirname => pega o diretório atual do arquivo.

module.exports = {
  // Qual o arquivo de entrada da aplicação.
  entry: path.resolve(__dirname, 'src', 'index.js'),
  // Qual o arquivo que será gerado quando convertido.
  output: { 
    // Caminho até a pasta.
    path: path.resolve(__dirname, 'public'),
    // Nome do arquivo de saída.
    filename: 'bundle.js'
  },
  // Quando instalar o webpack-dev-server
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    /*
      Onde irão ser introduzidos os loaders para que
      o webpack possa convertê-los 
    */
    rules: [
      /*
        Para arquivos javaScript é necessário
        adicionar o babel-loader, o comando para
        a instalação é yarn add babel-loader
      */
      {
        /*
          Propriedade obrigatória, irá receber
          uma expressão regular contendo a extensão
          do arquivo que o loader irá monitorar.
        */
        test: /\.js$/,
        /*
          Introduzimos o exclude, pois não queremos que o lader fique verificando os arquivos
          do node_modules, por isso adicionamos ele
          como valor dentro da regex.
        */ 
        exclude: /node_modules/,
        /*
          Aqui indicamos o loader que ele irá 
          utilizar para converter
        */
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          /*
            Pega o css que foi interpretado pelo css 
            loader e injeta no código html
          */
          { loader: 'style-loader' },
          /*  
            Lê os arquivos css e entende as
            importações que estão dentro
          */
          { loader: 'css-loader' },
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  }
}