import { webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  locales: {
    '/': {
      title: 'GlideWay',
      lang: 'zh-CN',
      description: 'GlideWay使用文档',
    },
    '/en/': {
      title: 'GlideWay',
      lang: 'en-US',
      description: 'GlideWay-Usage-Docs',
    },
  },

  bundler: webpackBundler(),

  theme: plumeTheme({
    // 添加您的部署域名
    hostname: 'https://GlideWay.github.io',

    plugins: {
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      shiki: {
          //  强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
        languages: ['shell', 'bash', 'typescript', 'javascript'],
      },

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      markdownEnhance: {
        demo: true,
        include: true,// Markdown 导入支持
        chart: true, // 图表支持
        echarts: true,// ECharts 图表支持
        mermaid: true,//Mermaid
        flowchart: true,// 流程图支持
        align: true, // 对齐容器
        mark: true, // 标记语法
        tasklist: true, // 任务列表语法
        attrs: true, // 属性语法
        sup: true, // 上标语法
        sub: true, // 下标语法
        footnote: true, // 注脚语法
        markmap: true, // Markmap 图表支持
        // kotlinPlayground: true, // Kotlin 交互演示
        vuePlayground: true, // Vue 交互演示
        sandpack: true, // sandpack 交互演示
      },

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      markdownPower: {
        pdf: true,
        caniuse: true,
        plot: true,
        bilibili: true,
        youtube: true,
        icons: true,
        codepen: true,
        replit: true,
        codeSandbox: true,
        jsfiddle: true,
        repl: {
          go: true,
          rust: true,
          kotlin: true,
        },
      },

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      comment: {
        provider: 'Giscus', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
        comment: true,
        repo: 'GlideWay/GlideWay.github.io',
        repoId: 'R_kgDONPm-_g',
        categoryId: 'DIC_kwDONPm-_s4CkSN7',
        mapping: 'pathname',
        reactionsEnabled: true,
        inputPosition: 'top',
      },
    },
  }),
})
