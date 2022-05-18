<script lang="ts" setup>
const count = $ref(0);

const { data, pending } = $(useFetch('/api/hello'));

watchEffect(() => console.log({ data }));
</script>

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
