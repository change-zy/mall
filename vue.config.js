module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 'src':'@',
        'assets':'@/assets',
        'components':'@/components',
        'network':'@/network',
        'pages':'@/pages',
        'common':'@/common'
      }
    }
  }
}