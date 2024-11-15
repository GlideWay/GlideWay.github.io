import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const zhGuideNote = defineNoteConfig({
  dir: 'guide',
  link: '/guide',
  sidebar: ['', 'dirsearch', 'gitdorker'],
})

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [zhGuideNote],
})

/* =================== locale: en-US ======================= */

const enGuideNote = defineNoteConfig({
  dir: 'guide',
  link: '/guide',
  sidebar: ['', 'dirsearch', 'gitdorker'],
})

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: [enGuideNote],
})

