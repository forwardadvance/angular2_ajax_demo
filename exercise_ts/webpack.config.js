module.exports = {
  entry: './source/app.ts',
  sourcemap: true,
  output: {
    filename: 'build/app.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
