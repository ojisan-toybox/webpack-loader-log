/** @file ts-loaderより前に呼ばれるloader */

module.exports = function (source) {
  console.log("[BEFORE]<loader input>", source);
  return 'import { add1 } from "./sub";';
};
