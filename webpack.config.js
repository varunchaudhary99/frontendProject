const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  mode: 'development', // or 'production'
  module: {
    rules: [
      {
        test: /\.jsx?$/, // .js and .jsx
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // adjust if needed
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};
