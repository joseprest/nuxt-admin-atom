<template>
  <!-- BEGIN: Mobile Menu -->
  <div class="mobile-menu md:hidden">
    <div class="mobile-menu-bar">
      <a href class="flex mr-auto">
        <img
          alt="Icewall Tailwind HTML Admin Template"
          class="w-6"
          src="@/assets/images/logo.svg"
        />
      </a>
      <bar-chart-2-icon
        class="w-8 h-8 text-white transform -rotate-90"
        @click="toggleMobileMenu"
      />
    </div>
    <transition @enter="enter" @leave="leave">
      <ul v-if="activeMobileMenu" class="py-5 border-t border-theme-29">
        <!-- BEGIN: First Child -->
        <template v-for="(menu, menuKey) in formattedMenu">
          <li :key="menuKey">
            <NuxtLink
              :to="menu.url"
              class="menu"
              :class="{
                'menu--active': isRouteActive(menu.url)
              }"
            >
              <div class="menu__icon">
                <component :is="menu.icon" />
              </div>
              <div class="menu__title">
                {{ menu.title }}
              </div>
            </NuxtLink>
          </li>
        </template>
        <!-- END: First Child -->
      </ul>
    </transition>
  </div>
  <!-- END: Mobile Menu -->
</template>

<script>
import Velocity from "velocity-animate";
import {
  HomeIcon,
  HardDriveIcon,
  ActivityIcon,
  BarChart2Icon,
  ChevronDownIcon
} from "vue-feather-icons";

export default {
  components: {
    BarChart2Icon,
    ChevronDownIcon,
    HardDriveIcon,
    HomeIcon,
    ActivityIcon
  },
  data() {
    return {
      activeMobileMenu: false
    };
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
    },
    toggleMobileMenu() {
      this.activeMobileMenu = !this.activeMobileMenu;
    },
    enter: (el, done) => {
      Velocity(el, "slideDown", { duration: 300 }, { complete: done });
    },
    leave: (el, done) => {
      Velocity(el, "slideUp", { duration: 300 }, { complete: done });
    }
  }
};
</script>
