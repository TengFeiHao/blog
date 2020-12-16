const themeReco = require('./themeReco.js')
const nav = require('../nav/')
const sidebar = require('../sidebar/')

module.exports = Object.assign({}, themeReco, {
  author: 'firfly',
  authorAvatar: '/user.png',
  mode: 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
  modePicker: true, // 默认 true，false 不显示模式调节按钮，true 则显示
  nav,
  sidebar,
  search: true, // 搜索设置
  searchMaxSuggestions: 10,
  sidebar: 'auto', // 自动形成侧边导航
})