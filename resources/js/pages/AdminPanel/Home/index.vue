<template>
  <PageWithSidebar>

  </PageWithSidebar>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  data: () => ({
    showSideBar: false,
  }),

  components: {
    PageWithSidebar: defineAsyncComponent(() => import('@components/templates/PageWithSidebar')),
  },
};
</script>

<style lang="scss" scoped>
.page-with-sidebar-component {
  min-height: 100vh;
  overflow: auto;
}
</style>
