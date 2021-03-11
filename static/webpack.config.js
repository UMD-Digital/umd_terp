const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssFocusWithin = require("postcss-focus-within");
const postcssObjectFit = require("postcss-object-fit-images");

const config = {
  entry: [
    "./src/scss/index.scss",
    "./src/scss/print.scss",
    "./src/js/index.ts"
  ],
  output: {
    filename: "js/index.js",
    path: path.resolve(__dirname, "build"),
    hotUpdateChunkFilename: "hot/hot-update.js",
    hotUpdateMainFilename: "hot/hot-update.json",
    publicPath: "../"
  },
  resolve: {
    extensions: [".js", ".json", ".ts", ".hbs", ".vue"],
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }]
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.scss$/,
        oneOf: [
          {
            exclude: [path.resolve(__dirname, "src/scss/print.scss")],
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  ident: "postcss",
                  plugins: () => [
                    postcssFocusWithin(),
                    postcssObjectFit()
                  ]
                }
              },
              "resolve-url-loader",
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          {
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "[name].css",
                  outputPath: "css"
                }
              },
              "extract-loader",
              "css-loader",
              "postcss-loader",
              "resolve-url-loader",
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: "url-loader",
        options: {
          limit: 1000,
          name: "[name].[ext]",
          outputPath: "fonts/"
        },
        exclude: [path.resolve(__dirname, "img")]
      },
      {
        test: /\.svg$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "fonts/"
        },
        exclude: [path.resolve(__dirname, "src", "img")]
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        loader: "url-loader",
        options: {
          limit: 1000,
          name: "[name].[ext]",
          outputPath: "img/"
        },
        exclude: [path.resolve(__dirname, "fonts")]
      },
      {
        test: /\.svg$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "img/"
        },
        exclude: [path.resolve(__dirname, "src", "fonts")]
      },
      {
        test: /\.(hbs|handlebars)$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "src/img",
        to: "img"
      },
      {
        from: "src/video",
        to: "video"
      }
    ]),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/index.css"
    }),
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery",
      "window.jQuery": "jquery"
    })
  ]
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.devServer = {
      hot: true,
      publicPath: "/build/"
    };
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  config.plugins.push(
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(argv)
    })
  );

  return config;
};
