const themeConfig = require('./config/theme/')
module.exports = {
  title: 'firefly',
  description: '凡心所向，素履以往；生如逆旅，一苇以航',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
  base: '/',
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  plugins: [
    ["flowchart"],
    ["element-ui"],
    ['vuepress-plugin-code-copy', true],
    [
      "@vuepress/medium-zoom",
      {
        selector: ".zoom", // 指定含有zoom的类缩放,后面这个类名可自定义,markdown中的img的class类保持一致就可以了的,没有指明的图片类将不支持缩放
        delay: 1000, // 延迟1秒
        options: {
          margin: 24,
          scrollOffset: 0
        }
      }
    ]
  ]
};