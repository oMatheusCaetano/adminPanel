<template>
  <button
    class="
      text-white
      font-medium
      py-2
      px-5
      rounded
      outline-none
    "
    :class="{
      'bg-purple-600 hover:bg-purple-900' : type === 'primary',
      'bg-yellow-600 hover:bg-yellow-900' : type === 'alert',
      'bg-red-500 hover:bg-red-600' : type === 'danger',
      'bg-gray-300 hover:bg-gray-400 text-gray-800' : type === 'light',
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary',
    },
  },
};
</script>
