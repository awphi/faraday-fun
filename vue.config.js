module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("raw")
      .test(/\.txt$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end()
      .rule("json")
      .test(/\.json$/)
      .use("json-loader")
      .loader("json-loader")
      .end();
  }
};
