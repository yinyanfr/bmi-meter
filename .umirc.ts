import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [
    '@umijs/plugins/dist/antd',
    '@umijs/plugins/dist/locale',
    '@umijs/plugins/dist/model',
  ],
  antd: {},
  model: {},
  locale: {
    antd: true,
    baseNavigator: true,
    baseSeparator: '-',
    default: 'en-US',
    title: false,
    useLocalStorage: true,
  },
  routes: [
    { path: '/', component: 'index' },
    { path: '*', component: 'index' },
  ],
  npmClient: 'yarn',
  title: 'BMI Meter',
  favicons: ['favicon.ico'],
  metas: [
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    {
      name: 'apple-touch-fullscreen',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    { name: 'apple-mobile-web-app-title', content: 'BMI Meter' },
    { name: 'application-name', content: 'BMI Meter' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-mobile-web-app-orientations', content: 'portrait-any' },
    { name: 'theme-color', content: '#ffffff' },
    { name: 'msapplication-TileColor', content: '#ffffff' },
    { name: 'msapplication-starturl', content: '/' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'format-detection', content: 'address=no' },
  ],
  links: [
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
    {
      rel: 'prefetch',
      href: '/manifest.json',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#ffffff',
    },
    {
      rel: 'shortcut icon',
      sizes: '196x196',
      href: '/icon-192x192.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '192x192',
      href: '/icon-192x192.png',
    },
    {
      rel: 'shortcut icon',
      sizes: '512x512',
      href: '/icon-512x512.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '512x512',
      href: '/icon-512x512.png',
    },
  ],
  scripts:
    process.env.NODE_ENV === 'production'
      ? [
          `
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./service-worker.js')
    }
`,
        ]
      : undefined,
  copy: [{ from: 'src/assets/pwa', to: 'dist' }],
});
