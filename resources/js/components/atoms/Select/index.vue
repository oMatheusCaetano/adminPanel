<template>
  <div
    class="dropdown-component group inline-block relative"
    @mouseover="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <button
      class="
        bg-gray-200
        hover:bg-gray-300
        text-gray-800
        font-medium
        py-2
        px-4
        rounded
        inline-flex
        items-center
      "
    >
      <span class="mr-1">Dropdown</span>
      <svg
        class="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </button>
    <ul
      class="absolute text-gray-700 pt-1 group-hover:block"
      :class="{ 'hide-select': !isHovering }"
    >
      <li
        class="w-full"
        v-for="(option, index) in options"
        :key="index"
        @click="option.onClick"
      >
        <a
          class="
            rounded-t
            bg-gray-200
            hover:bg-gray-300
            text-gray-800
            py-2
            px-4
            block
            whitespace-no-wrap
          "
          href="#"
          > {{ option.label }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
  },

  data: () => ({
    isHovering: false,
  }),
};
</script>

<style lang="scss" scoped>
.dropdown-component, ul, li {
  min-width: 125px;
}

ul {
  transition: .3s;
  z-index: 999999;

  &.hide-select {
    display: none;
  }
}

</style>
