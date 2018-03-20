const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, "dist"),
  SRC: path.resolve(__dirname, "src")
};

module.exports = {
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  },
  entry: ["babel-polyfill", path.join(paths.SRC, "index.js")],
  output: {
    filename: "bundle.js",
    path: paths.DIST
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, "index.html")
    })
  ],
  devServer: {
    contentBase: paths.SRC,
    historyApiFallback: true,
    port: 8080,
    open: true,
  },
  devtool: "source-map",
  target: "web",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
