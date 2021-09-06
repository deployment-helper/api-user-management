const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  entry: "./server.ts",
  mode: "development",
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyPlugin([
      { from: "./app.yaml", to: "./app.yaml" },
      { from: "./app.js", to: "./app.js" },
      { from: "./package.json", to: "./package.json" },
    ]),
  ],
  externals: [nodeExternals()],
};
