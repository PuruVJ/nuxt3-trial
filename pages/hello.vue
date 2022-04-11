<template>
  <Head>
    <Title>Hello world</Title>
  </Head>

  <pre>
  <code>
{{ JSON.stringify(data, null, 2) }}
  </code>
  </pre>
</template>

<script lang="ts" setup>
const { data } = await useAsyncData('count', () => $fetch('/api/hello'));
</script>
