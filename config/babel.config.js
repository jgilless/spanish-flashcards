const { NODE_ENV } = process.env;

const presetEnvCfg = {
  modules: NODE_ENV === "test" ? "commonjs" : false,
  useBuiltIns: "entry",
  targets: NODE_ENV === "test" ? { node: "current" } : { esmodules: true },
  loose: true
};

module.exports = () => ({
  presets: [["@babel/preset-env", presetEnvCfg], "@babel/preset-react"].filter(
    Boolean
  ),
  plugins: ["@babel/plugin-syntax-dynamic-import"]
});
