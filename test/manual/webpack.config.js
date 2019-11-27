const Self = require('../../');
const WebpackRTLPlugin = require('webpack-rtl-plugin');

module.exports = {
  mode: 'development',
  output: {
    chunkFilename: '[contenthash].js',
    publicPath: '/dist/',
    crossOriginLoading: 'anonymous',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [Self.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new Self({
      filename: '[name].css',
      chunkFilename: '[contenthash].css',
      rtlEnabled: true,
    }),
    new WebpackRTLPlugin(),
  ],
  devServer: {
    contentBase: __dirname,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
