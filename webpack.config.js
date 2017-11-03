var nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    entry: './src/server.js',
    output: {
      path: './dist',
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/'
    },
    externals: nodeExternals(),
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel'
        }
      ]
    }
  }
];
