import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  experimental: {
    reactivityTransform: true,
  },
  typescript: {
    shim: false,
    strict: true,
  },
});
