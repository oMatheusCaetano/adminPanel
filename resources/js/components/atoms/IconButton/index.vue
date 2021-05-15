<template>
  <button class="hover:bg-gray-200 hover:shadow-sm p-3 rounded-full" type="button">
    <div class="h-5 w-5">
      <slot />
    </div>
  </button>
</template>

<style lang="scss" scoped>
button {
  border: none;
  outline: none;
}
</style>
