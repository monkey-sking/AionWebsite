import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-hans', 'zh-hant', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'it'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
