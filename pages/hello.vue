<template>
  {{ JSON.stringify(data) }}
</template>

<script lang="ts" setup>
const { data } = await useAsyncData('count', () => $fetch('/api/hello'));
</script>
