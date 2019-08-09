const paths = require("./paths");

module.exports = {
  compress: true,
  contentBase: paths.appPublic,
  watchContentBase: true,
  hot: true,
  publicPath: paths.publicPath,
  quiet: false, //jvg
  // host: "0.0.0.0", //Use this for network
  host: "localhost",
  port: 3000,
  clientLogLevel: "none",
  historyApiFallback: {
    disableDotRule: true
  },
  open: true
};
