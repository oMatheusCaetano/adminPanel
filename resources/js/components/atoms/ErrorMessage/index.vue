<template>
  <p
    v-if="error"
    class="
      text-sm
      bg-red-100
      px-4
      py-2
      text-red-500
      font-medium
      rounded-md
      shadow-sm
      mt-8
      mx-4
    "
  >
    {{ error }}
  </p>
</template>

<script>
export default {
  props: {
    error: String,
  },
};
</script>

<style></style>
