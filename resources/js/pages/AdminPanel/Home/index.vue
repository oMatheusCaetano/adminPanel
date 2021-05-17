<template>
  <SideBar />
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
