const path = require('path')
const resolve = (paths) => path.resolve(__dirname, paths)

module.exports = {
  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: 'index.js',
    library: 'FlatElement',
    libraryTarget: 'umd'
  },

  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          'scss': 'vue-style-loader!css-loader!postcss-loader!sass-loader'
        }
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: 'static/images/[name].[ext]?[hash]'
      }
    }]
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },

  devServer: {
    historyApiFallback: true,
    noInfo: true
  }
}
