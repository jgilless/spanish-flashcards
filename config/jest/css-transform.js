/**
 * import './<component>.css';
 * needs to be transformed because non-js stuff happens.
 * We can transform these files into a string (process())
 */
module.exports = {
  process() {
    return "module.exports = {};";
  },
  getCacheKey() {
    return "css-transform";
  }
};
