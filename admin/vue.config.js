const webpack = require("webpack");
const HrWebpackProject = require("./src/HrWebpackConfig.js");

module.exports = HrWebpackProject({
  publicPath: "/",

  devServer: {
    port: 8081,
  },

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: "jquery",
        "window.jQuery": "jquery",
        $: "jquery",
        moment: "moment",
      }),
    ],
  },
});
