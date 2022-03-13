const webpack = require("webpack");
const { merge } = require("webpack-merge");
const AddCharsetWebpackPlugin = require("add-charset-webpack-plugin");

const plugins = [
  new webpack.HashedModuleIdsPlugin(),
  new webpack.ContextReplacementPlugin(
    /moment[\/\\]locale$/,
    /en|ru|uz|uz-latn/
  ),
  new AddCharsetWebpackPlugin({
    charset: "UTF-8",
  }),
];

module.exports = function HrWebpackProject(config = {}) {
  return merge(
    {
      runtimeCompiler: true,
      configureWebpack: {
        plugins,

        resolve: {
          alias: {
            vue$: "vue/dist/vue.esm.js",
            "@Hr": __dirname,
          },
          extensions: ["*", ".scss", ".js", ".vue", ".json"],
        },

        optimization: {
          runtimeChunk: "single",
          splitChunks: {
            chunks: "all",
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
              icons: {
                test: /[\\/]node_modules[\\/](@fortawesome|@mdi)|icons.scss$/,
                name: "icons",
              },
            },
          },
        },
      },
    },
    config
  );
};
