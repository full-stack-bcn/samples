const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    // Here we can say which is the generated bundle
    filename: 'bundle.js',
    // Here we can choose which is the output directory
    path: path.resolve(__dirname, 'public')
  }
};
