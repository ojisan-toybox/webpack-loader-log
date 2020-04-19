const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          path.resolve(__dirname, "lib/logger-loader-beffore.js"),
          "ts-loader",
          path.resolve(__dirname, "lib/logger-loader-after.js"), // 後ろから読まれるのでafterという名前だがこれが先に呼ばれる
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
};
