<template>
  <div>
    <!-- <MobileMenu /> -->
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
          <li>
            <NuxtLink to="#" class="side-menu">
              <div class="side-menu__icon">
                <inbox-icon size="1.5x" class="custom-class"></inbox-icon>
              </div>
              <div class="side-menu__title">Inbox</div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/file-manager" class="side-menu">
              <div class="side-menu__icon">
                <hard-drive-icon
                  size="1.5x"
                  class="custom-class"
                ></hard-drive-icon>
              </div>
              <div class="side-menu__title">File Manager</div>
            </NuxtLink>
          </li>
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
import { InboxIcon, HardDriveIcon } from "vue-feather-icons";
export default {
  components: {
    TopBar,
    InboxIcon,
    HardDriveIcon
  },
  data() {
    return {
      formattedMenu: [{}]
    };
  }
};
</script>
