module.exports = {
  type: 'blog',
  friendLink: [
    {
      title: 'VuePress',
      desc: 'Vue-powered Static Site Generator',
      logo: "https://vuepress.vuejs.org/hero.png",
      link: 'https://vuepress.vuejs.org/'
    }
  ],
  // 博客设置
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: 'Category' // 默认 “分类”
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: 'Tag' // 默认 “标签”
    }
  },
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
}