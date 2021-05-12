<template>
  <Title title="Hello World Page TEST Here" />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    Title: defineAsyncComponent(() => import('@component/text/Title')),
  },
}
</script>

<style>

</style>
