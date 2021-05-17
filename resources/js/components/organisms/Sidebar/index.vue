<template>
  <SideBarSkeleton @toggle-mode="toggleMode">
    <div
      class="flex flex-col bg-gray-800 justify-between h-screen overflow-y-auto overflow-x-hidden"
      :class="{ showSideBar: !showSideBar }"
      ref="sidebarSkeletonComponent"
    >
      <section>
        <header class="py-4">
          <router-link :to="{ name: 'AdminPanelHome' }">
            <img class="h-4 mx-auto" src="/images/admin-panel-light.svg" alt="Admin Panel">
          </router-link>
        </header>

        <main class="p-4">
          <ul>
            <li class="sidebar-list-item">
              <div class="sidebar-link-side">
                <MenuAlt1Icon class="text-white mx-auto h-8 w-8" />
              </div>
              <router-link
                class="text-white flex items-center sidebar-link"
                :to="{ name: 'AdminPanelCreditCard' }"
              >
                <MenuAlt1Icon class="text-white h-5 w-5" />
                <span class="ml-4">Cartões de Crédito</span>
              </router-link>
            </li>
          </ul>
        </main>

      </section>
      <footer class=" py-4">

      </footer>
    </div>
  </SideBarSkeleton>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  data: () => ({
    showSideBar: false,
  }),

  methods: {
    toggleMode(showSideBar) {
      this.showSideBar = showSideBar;
    },
  },

  components: {
    MenuAlt1Icon: defineAsyncComponent(() => import('@heroicons/vue/outline/MenuAlt1Icon')),
    SideBarSkeleton: defineAsyncComponent(() => import('@components/molecules/SideBarSkeleton')),
  },
};
</script>

<style lang="scss" scoped>
.sidebar-skeleton-component {
  .sidebar-list-item {
    cursor: pointer;
  }

  .sidebar-list-item {
    display: flex;
    white-space:nowrap;
  }

  .sidebar-link-side {
    display: none;
  }

  @media (min-width: 768px) {
    @media (max-width: 1024px) {
      & .showSideBar {
        .sidebar-link-side {
          display: inline;
          margin-right: 200px;
          margin-left: 7px;
        }

        &:hover {
          .sidebar-link-side {
            margin-left: -220px;
          }
        }
      }
    }
  }

}

</style>
