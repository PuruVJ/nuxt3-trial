import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  experimental: {
    reactivityTransform: true,
  },
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
  typescript: {
    shim: false,
    strict: true,
  },
});
