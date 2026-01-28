// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-hans', 'zh-hant'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
