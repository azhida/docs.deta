import { DefaultTheme, defineConfig } from 'vitepress'
import { cloneDeep } from 'lodash-es';  
import { fnMapTree } from './fn';

const sidebarArr: DefaultTheme.Sidebar = [
  {text: 'Index', link: '/'},
  {
    text: 'Learn',
    link: '/',
    base: '/learn',
    collapsed: true,
    items: [
      { text: 'The Personal Cloud', link: '/what-is-pc' },
      { text: 'Why the Personal Cloud?', link: '/why-the-pc' }
    ]
  },
  {
    text: 'Build',
    link: '/',
    base: '/build',
    collapsed: true,
    items: [
      { text: 'New Apps', link: '/new-apps' },
      { text: 'Space Apps 101', link: '/space-apps' },
      { text: 'Fundamentals', link: '/', base: '/build/fundamentals', collapsed: true,
        items: [
          { text: 'The Space CLI', link: '/space-cli' },
          { text: 'App Life Cycle', link: '/app-lifecycle' },
          { text: 'Development', link: '/', base: '/build/fundamentals/development', collapsed: true, 
            items: [
              { text: 'Builder', link: '/builder'},
              { text: 'Projects', link: '/projects'},
              { text: 'Local Development', link: '/local-development'},
              { text: 'Pushing', link: '/pushing'},
              { text: 'The Builder Instance', link: '/builder-instance'},
              { text: 'Debugging', link: '/debugging'},
            ] 
          },
          { text: 'The Space Runtime', link: '/', base: '/build/fundamentals/the-space-runtime', collapsed: true, 
            items: [
              { text: 'Micros', link: '/micros' },
              { text: 'Configuration', link: '/configuration' },
              { text: 'Authentication', link: '/authentication' },
              { text: 'Actions', link: '/actions' },
              { text: 'Domains', link: '/domains' },
            ]
          },
          { text: 'Data Storage', link: '/data-storage' },
        ]
      },
      { text: 'Guides', link: '/', base: '/build/guides', collapsed: true, 
        items: [
          { text: 'Create a Public Site', link: '/public-site' },
          { text: 'Build a To Do App', link: '/build-a-to-do-app' },
          { text: 'Accessing a Client IP Address', link: '/accessing-client-ip-address' },
        ]
      },
      { text: 'Quick Starts', link: '/', base: '/build/quick-starts', collapsed: true,  
        items: [
          { text: 'Run a Python App', link: '/python' },
          { text: 'Run a Node.js App', link: '/node' },
          { text: 'Run a Static App', link: '/static' },
          { text: 'Run a Nuxt App', link: '/nuxt' },
          { text: 'Run a Next App', link: '/next' },
          { text: 'Run a SvelteKit App', link: '/sveltekit' },
          { text: 'Run a Go App', link: '/go' },
          { text: 'Run a Rust App', link: '/rust' },
          { text: 'Run a Custom App', link: '/custom' },
        ]
      },
      { text: 'Reference', link: '/', base: '/build/reference', collapsed: true, 
        items: [
          { text: 'Space CLI', link: '/cli' },
          { text: 'The Spacefile', link: '/spacefile' },
          { text: 'The Space Runtime', link: '/runtime' },
          { text: 'Deta Drive', link: '/drive' },
          { text: 'Deta Base', link: '/', base: '/build/reference/deta-base', collapsed: true, 
            items: [
              {text: 'Expiring Items', link: '/expiring-items'},
              {text: 'Queries', link: '/queries'},
            ]
          },
          { text: 'The Deta SDK', link: '/', base: '/build/reference/sdk', collapsed: true, 
            items: [
              {text: 'Base', link: '/base'},
              {text: 'Drive', link: '/drive'},
              {text: 'Examples', link: '/examples'},
              {text: 'Types', link: '/types'},
            ]
          },
          { text: 'Deta HTTP API', link: '/', base: '/build/reference/http-api', collapsed: true, 
            items: [
              {text: 'Base', link: '/base'},
              {text: 'Drive', link: '/drive'},
            ]
          },
        ]
      },
      { text: 'FAQ', link: '/faq' },
    ]
  },
  {
    text: 'Use',
    link: '/',
    base: '/use',
    collapsed: true,
    items: [
      { text: 'The User Interface', link: '/interface' },
      { text: 'Sharing', link: '/sharing' },
      {text: 'Space Apps', link: '/', base: '/use/space-apps', collapsed: true, 
        items: [
          {text: 'Deta Discovery', link: '/discovery'},
          {text: 'Using Space Apps', link: '/using-apps'},
          {text: 'Actions', link: '/actions'},
          {text: 'Domains', link: '/domains'},
          {text: 'Logs', link: '/logs'},
          {text: 'Settings', link: '/settings'},
        ]
      },
      {text: 'Your Data', link: '/', base: '/use/your-data', collapsed: true,
        items: [
          {text: 'Collections', link: '/collections'},
          {text: 'Data GUIs', link: '/guis'},
          {text: 'Exports', link: '/exports'},
        ]        
      },
      {text: 'Your Account', link: '/your-account'},
    ]
  },
  {
    text: 'Publish',
    link: '/',
    base: '/publish',
    collapsed: true,
    items: [
      { text: 'Releasing your app', link: '/releasing' },
      { text: 'Discovery.md File', link: '/discovery-md'},
      { text: 'App Icons', link: '/app-icons'},
      { text: 'Growing your App', link: '/growing-your-app'},
    ]
  },
]

const sidebarArr_en = cloneDeep(sidebarArr);
const sidebarArr_zh = cloneDeep(sidebarArr);
fnMapTree(sidebarArr_en);
fnMapTree(sidebarArr_zh, 'zh');

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Deta Docs",
  description: "Deta Docs",
  cleanUrls: true,
  base: '/docs.deta/',
  locales: {
    root: { label: 'English', lang: 'en', link: '/en/' },
    zh: { label: '简体中文', lang: 'zh', link: '/zh/' },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: 'deep',
    sidebar: {
      '/en/': sidebarArr_en,
      '/zh/': sidebarArr_zh,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
