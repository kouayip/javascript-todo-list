const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
    bar: path.resolve(__dirname, "src/assets/js/toolbar.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new copyWebpackPlugin({
      patterns: [
        {
          from: "./src/assets/images/*",
          to: "assets/images",
          flatten: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
      chunks: ["main", "bar"],
    }),
  ],
  devtool: "source-map",
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    inline: true,
    open: true,
    hot: true,
    port: 4000,
  },
};
