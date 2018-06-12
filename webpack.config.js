const path = require('path');


const CLI_DIR = path.join(__dirname, '/client');


module.exports = {
  entry: `${CLI_DIR}/index.js`,
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'review-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: CLI_DIR,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {loader: "style-loader"},
          {loader:"css-loader"}
        ],
      },
    ],
  },
};
