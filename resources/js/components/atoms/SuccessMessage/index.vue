<template>
  <p
    v-if="message"
    class="
      text-sm
      bg-purple-100
      px-4
      py-2
      text-purple-500
      font-medium
      rounded-md
      shadow-sm
      mt-8
      mx-4
    "
  >
    {{ message }}
  </p>
</template>

<script>
export default {
  props: {
    message: String,
  },
};
</script>

<style></style>
