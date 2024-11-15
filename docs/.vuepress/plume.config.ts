import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar'
import { enNotes, zhNotes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://avatars.githubusercontent.com/u/187026252',
  // your git repo url
  docsRepo: 'https://github.com/GlideWay/GlideWay.github.io',
  docsDir: '',

  appearance: true,

  social: [
    { icon: 'github', link: '/' },
  ],

  locales: {
    '/': {
      profile: {
        avatar: 'https://avatars.githubusercontent.com/u/187026252',
        name: 'GlideWay',
        description: 'GlideWay使用文档',
        circle: true,
        location: '中国哈尔滨',
        organization: 'https://github.com/GlideWay',
      },

      navbar: zhNavbar,
      notes: zhNotes,
    },
    '/en/': {
      profile: {
        avatar: 'https://avatars.githubusercontent.com/u/187026252',
        name: 'GlideWay',
        description: 'GlideWay-Usage-Docs',
        circle: true,
        location: 'Harbin, China',
        organization: 'https://github.com/GlideWay',
      },

      navbar: enNavbar,
      notes: enNotes,
    },
  },
})
