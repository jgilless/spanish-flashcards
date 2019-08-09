const fs = require("fs");
const path = require("path");

// Build process has to be sync at this point, fs.realpath is by default async
const appDir = fs.realpathSync(process.cwd());

const resolveAppPath = function(relativePath) {
  return path.resolve(appDir, relativePath);
};

module.exports = {
  appPublic: resolveAppPath("public"),
  appHtml: resolveAppPath("public/index.html"),
  appSrc: resolveAppPath("src"),
  appIndexJs: resolveAppPath("src/index.js"),
  nodeModules: resolveAppPath("node_modules"),
  dist: resolveAppPath(".dist"),
  config: resolveAppPath("config"),
  swSrc: resolveAppPath("src/sw.js")
};
