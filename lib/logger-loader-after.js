/** @file ts-loaderより後に呼ばれるloader */

module.exports = function (source) {
  console.log("[AFTER]<loader input>", source);
  return source;
};
