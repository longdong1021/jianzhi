module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  },
  devServer: {
    proxy: {
        '/api': {
            target: 'http://47.92.238.96',
            changeOrigin: true,
        }
    }
}
}
