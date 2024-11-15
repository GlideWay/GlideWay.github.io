import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  { text: '使用指南',link: '/notes/guide/README.md'},
  // {
  //   text: '笔记',
  //   items: [{ text: '示例', link: '/notes/demo/README.md' }]
  // },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Blog', link: '/en/blog/' },
  { text: 'Tags', link: '/en/blog/tags/' },
  { text: 'Archives', link: '/en/blog/archives/' },
  { text: 'Guide',link: '/en/notes/guide/README.md'},
  // {
  //   text: 'Notes',
  //   items: [{ text: 'Demo', link: '/en/notes/demo/README.md' }]
  // },
])

