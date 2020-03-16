const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        // Here we tell webpack that if we ever import a file ending with '.css'
        test: /\.(png|svg|jpg)$/,
        // We want to transform it through two loaders
        use: ['file-loader']
      }
    ]
  }
};
