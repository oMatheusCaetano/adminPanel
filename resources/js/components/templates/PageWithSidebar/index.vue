<template>
  <div class="flex">
    <SideBar />
    <div class="page-with-sidebar-component bg-gray-100">
      <slot />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  data: () => ({
    showSideBar: false,
  }),

  components: {
    SideBar: defineAsyncComponent(() => import('@components/organisms/Sidebar')),
  },
};
</script>

<style lang="scss" scoped>
.page-with-sidebar-component {
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  overflow-y: auto;
}
</style>
