<template>
  <button
    class="nav-button-component p-4 rounded-full shadow-xl outline-none focus:outline-none"
    :class="{ 'absolute right-5 bottom-5 lg:invisible': absolute }"
    type="button"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: { absolute: Boolean },
};
</script>
