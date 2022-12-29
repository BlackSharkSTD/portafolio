const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(glb|gltf|obj|mtl)$/,
        use:
        [
            {
                loader: 'file-loader',
                options:
                {
                    outputPath: 'assets/models/'
                }
            }
        ]
      },
      {
        test: /\.mp4$/,
        use: 'file-loader?name=videos/[name].[ext]',
      },
      {
        test: /\.(png|jpe?g|svg|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: { name: "assets/[hash].[ext]" },
          },
        ],
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
    }),
    new WebpackPwaManifest({
      name: "Victor Rios - Portafolio",
      short_name: "Portfolio",
      description: "Bienvenidos a mi portafolio",
      background_color: "#212121",
      theme_color: "#212121",
      display: "standalone",
      scope: "/",
      start_url: "/",
      icons: [
        {
          src: path.resolve('src/assets/img/icon.png'),
          type: "image/png",
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        {
          src: path.resolve('src/assets/img/logo512.png'),
          type: "image/png",
          size: '512x512'
        },
        {
          src: path.resolve('src/assets/img/maskable.png'),
          size: '192x192',
          type: "image/png",
          purpose: 'any maskable'
        }
      ]
    }),
  ],
};