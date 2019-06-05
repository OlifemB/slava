module.exports = {
  module: {
    rules: [{
      test: /\.(sass|scss)$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    }, {
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader"
      ]
    }]
  }
};