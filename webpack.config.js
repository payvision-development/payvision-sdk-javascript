const path = require('path')
const webpack = require('webpack')

module.exports = {
  // mode: 'development',
  mode: 'none',
  target: 'node',
  entry: {
    rhino: [
      './src/sdk.js',
    ],
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs-module',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        // Cannot be included in Rhino build
        test: [
          path.resolve(__dirname, 'src/infrastructure/HttpClient.js'),
          path.resolve(__dirname, 'src/infrastructure/webhookService.js'),
        ],
        use: 'null-loader',
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.TARGET_ENVIRONMENT': "'RHINO'",
    }),
    function requireNodeModules(compiler) {
      compiler.hooks.compilation.tap('requireNodeModules', compilation => {
        compilation.mainTemplate.hooks.localVars.tap('requireNodeModules', (source, chunk, hash) => {
          let result = '// The module cache\nvar installedModules = {}\n'
          result += 'var dependencyModules = [\n'
          chunk.groupsIterable.forEach(group => {
            result += group.chunks.map(dependency => {
              if (dependency.filenameTemplate) {
                return `  require('./${dependency.filenameTemplate}').modules,\n`
              }
              return ''
            }).join('')
          })
          result += '{}];\n'
          result += 'dependencyModules.forEach(function (obj) {\n'
          result += '  // eslint-disable-next-line no-restricted-syntax\n'
          result += '  for (var key in obj) {\n'
          result += '    if (Object.prototype.hasOwnProperty.call(obj, key)) {\n'
          result += '      modules[key] = obj[key];\n'
          result += '    }\n'
          result += '  }\n'
          result += '});\n'
          return result
        })
      })
    },
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        payments: {
          test: /[\\/]src[\\/]domain[\\/]payments[\\/]/,
          filename: 'payments.js',
          priority: -10,
        },
        checkouts: {
          test: /[\\/]src[\\/]domain[\\/]checkouts[\\/]/,
          filename: 'checkouts.js',
          priority: -10,
        },
        paymentlink: {
          test: /[\\/]src[\\/]domain[\\/]paymentlink[\\/]/,
          filename: 'paymentlink.js',
          priority: -10,
        },
      },
    },
  },
}
