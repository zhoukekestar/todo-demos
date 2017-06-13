const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/app.js',
    vendor: 'moment'
  },
  output: {
    filename: 'bundle.[name].js',
    path: `${__dirname}/dist`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                targets: {
                  chrome: 52,
                  // browsers: ["ie >= 8"]
                }
              }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
}
