<template>
  <div>
    <MobileMenu />
    <div class="flex">
      <!-- BEGIN: Side Menu -->
      <nav class="side-nav">
        <!-- BEGIN: Logo -->
        <NuxtLink
          :to="{ name: 'side-menu-dashboard-overview-1' }"
          tag="a"
          class="flex items-center pt-4 pl-5 intro-x"
        >
          <img
            alt="Icewall Tailwind HTML Admin Template"
            class="w-6"
            src="@/assets/images/logo.svg"
          />
          <span class="hidden ml-3 text-lg text-white xl:block">
            Ru<span class="font-medium">bick</span>
          </span>
        </NuxtLink>
        <!-- END: Logo -->
        <div class="my-6 side-nav__devider"></div>
        <ul>
          <!-- BEGIN: First Child -->
          <template v-for="(menu, menuKey) in formattedMenu">
            <li :key="menuKey">
              <NuxtLink
                :to="menu.url"
                class="side-menu"
                :class="{
                  'side-menu--active': isRouteActive(menu.url)
                }"
              >
                <div class="side-menu__icon">
                  <component
                    :is="menu.icon"
                    size="1.5x"
                    class="custom-class"
                  ></component>
                </div>
                <div class="side-menu__title">{{ menu.title }}</div>
              </NuxtLink>
            </li>
          </template>
          <!-- END: First Child -->
        </ul>
      </nav>
      <!-- END: Side Menu -->
      <!-- BEGIN: Content -->
      <div class="content">
        <TopBar />
        <Nuxt />
      </div>
      <!-- END: Content -->
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/top-bar/Main.vue";
import MobileMenu from "@/components/mobile-menu/Main.vue";
import { HardDriveIcon, HomeIcon, ActivityIcon } from "vue-feather-icons";
export default {
  components: {
    TopBar,
    MobileMenu,
    HardDriveIcon,
    HomeIcon,
    ActivityIcon
  },
  data() {
    return {};
  },
  computed: {
    formattedMenu() {
      return this.$store.state.menu.list;
    }
  },
  methods: {
    isRouteActive(id) {
      if (this.$nuxt.$route.path.includes(id)) return true;
      else return false;
    }
  }
};
</script>
<style scoped>
.nuxt-link-active {
  color: red;
}
</style>
