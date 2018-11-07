const path = require('path');
const devServerPort = 3000;

devServerConfig = {
  port: devServerPort,
  publicPath: "./dist/",
  hotOnly: true,
  open: true,
  openPage: "./powerpoint.html",

  public: "localhost:" + devServerPort,
  headers: {
    "Access-Control-Allow-Origin": "*"
  },
  contentBase: __dirname + '/dist', 
  clientLogLevel: "info",
  stats: {
    colors: true,
    assets: true,
    warnings: true
  }
};

module.exports = {
  //mode:'development',
    mode:'development',
  entry:path.join(__dirname,'src/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
      ],
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map',
  devServer: devServerConfig,
  
};