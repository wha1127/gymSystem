const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        // 配置了esm.js这个文件
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src')  // 需要改东西
      }
    }
  },
  devServer: {
    proxy: {
      // 以/api开头的才用代理服务器
      '/api': {
        // 目标地址
        target: 'http://localhost:5000',
        // 是否跨域
        changeOrigin: true,
        pathRewrite: {
          //重写路径,写路径时/api=target中地址,请求时只要写/api+请求即可,即以/api代替了target中地址
          '^/api': ''
        }
      },
    }
  }
}