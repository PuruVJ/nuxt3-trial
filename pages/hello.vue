<template>
  <div>
    <Head>
      <Title>Hello world</Title>
    </Head>

    <button @click="count++">Increment me</button>

    <h1>{{ count }}</h1>

    {{ pending ? 'Loading' : 'Loaded' }}

    <div v-if="pending">Loading...</div>
    <pre v-else>
  <code>
{{ JSON.stringify(data, null, 2) }}
  </code>
  </pre>
  </div>
</template>

<script lang="ts" setup>
const count = $ref(0);

const { data, pending } = $(useLazyFetch('/api/hello'));

watchEffect(() => console.log({ pending }));
</script>
