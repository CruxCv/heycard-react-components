const path = require('path')

const resolve = (pathname) => path.resolve(__dirname, pathname)
const nodeModule = (name) => require.resolve(name)

module.exports = {
  resolve: {
    modules: [resolve('../node_modules')],
    extensions: ['.web.js', '.js', '.json', '.jsx'],
    alias: {
      '@': resolve('../src'),
      components: resolve('../src/components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules(?!\/@storybook\/addon-info)/,
        use: ['style-loader', 'css-loader'],
        // use: [
        //   {
        //     loader: 'style-loader',
        //   },
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       modules: {
        //         localIdentName: '[name]__[local]--[hash:base64:5]',
        //       },
        //       sourceMap: true,
        //       importLoaders: 1,
        //     },
        //   },
        //   {
        //     loader: 'postcss-loader',
        //     options: {
        //       sourceMap: 'inline',
        //     },
        //   },
        // ],
      },
      {
        test: /\.less$/,
        // exclude: /node_modules(?!\/@storybook\/addon-info)/,
        include: resolve('../src'),
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|svg)$/,
        loader: nodeModule('url-loader'),
      },
    ],
  },
}
