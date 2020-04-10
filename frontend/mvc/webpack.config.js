const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/controller.js",
  module: {
    rules: [
      {
        test: /\.css/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Todo List (MVC)",
      template: "src/index.html",
    }),
  ],
  devServer: {
    contentBase: "./dist",
    open: "google-chrome",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
