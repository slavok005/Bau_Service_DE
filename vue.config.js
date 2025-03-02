const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        '__VUE_OPTIONS_API__': JSON.stringify(true),
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false)
      })
    ]
  },
  devServer: {
    allowedHosts: "all",
    host: "0.0.0.0",
    port: process.env.PORT || 10000,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
};
