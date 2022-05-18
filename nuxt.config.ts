import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  experimental: {
    reactivityTransform: true,
  },
  typescript: {
    shim: false,
    strict: true,
  },
});
