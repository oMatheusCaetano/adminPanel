<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  props: {
    title: String,
  },
}
</script>

<style lang="scss" scoped>
@import '@styleVariables';

h2 {
  color: $orange;
}
</style>
