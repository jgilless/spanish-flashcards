const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./paths");
const babelConfig = require("./babel.config.js");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  entry: paths.appIndexJs,
  output: {
    // pathinfo adds filename comments to the requires in the output
    pathinfo: false,
    // This is not a real file
    filename: "assets/js/bundle.js",
    chunkFilename: "assets/js/[chunkhash:8].chunk.js",
    // This serves the app from the root of localhost:<port>
    publicPath: "/"
  },
  resolve: {
    modules: [paths.nodeModules],
    extensions: [".js", "json"]
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: babelConfig()
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      inject: true
    }),
    new webpack.HashedModuleIdsPlugin(),

    new WorkboxPlugin.InjectManifest({
      swSrc: paths.swSrc,
      swDest: "sw.js"
    })
  ]
};
