<template>
  <div>
    <div
      class="
        sidebar-skeleton-component
        h-full
        min-h-screen
        overflow-x-hidden
        fixed
        w-0
        md:w-20
        lg:w-60
      "
      :class="{ 'showfull': showSideBar }"
    >
      <div>
        <slot />
      </div>
    </div>

    <NavButton
      absolute
      class="bg-purple-500 hover:bg-purple-700"
      @click="toggleMode()"
    >
      <MenuAlt1Icon class="text-white h-5 w-5" />
    </NavButton>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  data: () => ({
    showSideBar: false,
  }),

  methods: {
    toggleMode() {
      this.showSideBar = !this.showSideBar;
      this.$emit('toggle-mode', this.showSideBar);
    },
  },

  components: {
    MenuAlt1Icon: defineAsyncComponent(() => import('@heroicons/vue/outline/MenuAlt1Icon')),
    NavButton: defineAsyncComponent(() => import('@components/atoms/NavButton')),
  },
};
</script>

<style lang="scss" scoped>
.sidebar-skeleton-component {
  &.showfull {
    width: 15rem;
  }

  &:hover {
    width: 15rem;
  }
}
</style>
