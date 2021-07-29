<template>
  <!-- BEGIN: Top Bar -->
  <div class="top-bar">
    <!-- BEGIN: Breadcrumb -->
    <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
      <a href="">Application</a>
      <chevron-right-icon class="breadcrumb__icon" />
      <a href="" class="breadcrumb--active">Dashboard</a>
    </div>
    <!-- END: Breadcrumb -->
    <!-- BEGIN: Search -->
    <div class="intro-x relative mr-3 sm:mr-6">
      <div class="search hidden sm:block">
        <input
          type="text"
          class="search__input form-control border-transparent placeholder-theme-13"
          placeholder="Search..."
          @focus="showSearchDropdown"
          @blur="hideSearchDropdown"
        />
        <search-icon class="search__icon dark:text-gray-300" />
      </div>
      <a class="notification sm:hidden" href="">
        <search-icon class="notification__icon dark:text-gray-300" />
      </a>
      <div class="search-result" :class="{ show: searchDropdown }">
        <div class="search-result__content">
          <div class="search-result__content__title">Pages</div>
          <div class="mb-5">
            <a href="" class="flex items-center">
              <div
                class="w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full"
              >
                <inbox-icon class="w-4 h-4" />
              </div>
              <div class="ml-3">Mail Settings</div>
            </a>
            <a href="" class="flex items-center mt-2">
              <div
                class="w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full"
              >
                <users-icon class="w-4 h-4" />
              </div>
              <div class="ml-3">Users & Permissions</div>
            </a>
            <a href="" class="flex items-center mt-2">
              <div
                class="w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full"
              >
                <credit-card-icon class="w-4 h-4" />
              </div>
              <div class="ml-3">Transactions Report</div>
            </a>
          </div>
          <div class="search-result__content__title">Users</div>

          <div class="search-result__content__title">Products</div>
        </div>
      </div>
    </div>
    <!-- END: Search -->
    <!-- BEGIN: Notifications -->
    <div class="intro-x dropdown mr-auto sm:mr-6">
      <div
        class="dropdown-toggle notification notification--bullet cursor-pointer"
        role="button"
        aria-expanded="false"
      >
        <bell-icon class="notification__icon dark:text-gray-300" />
      </div>
      <div class="notification-content pt-2 dropdown-menu">
        <div
          class="notification-content__box dropdown-menu__content box dark:bg-dark-6"
        >
          <div class="notification-content__title">Notifications</div>
        </div>
      </div>
    </div>
    <!-- END: Notifications -->
    <!-- BEGIN: Account Menu -->
    <div class="intro-x dropdown w-8 h-8">
      <div
        class="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
        role="button"
        aria-expanded="false"
      >
        <img
          alt="Icewall Tailwind HTML Admin Template"
          :src="require(`@/assets/images/profile-1.jpg`)"
        />
      </div>
      <div class="dropdown-menu w-56">
        <div
          class="dropdown-menu__content box bg-theme-26 dark:bg-dark-6 text-white"
        >
          <div class="p-4 border-b border-theme-27 dark:border-dark-3">
            <div class="font-medium">Jose</div>
            <div class="text-xs text-theme-28 mt-0.5 dark:text-gray-600">
              Developer
            </div>
          </div>
          <div class="p-2">
            <a
              href=""
              class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
            >
              <user-icon class="w-4 h-4 mr-2" /> Profile
            </a>
            <a
              href=""
              class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
            >
              <edit-icon class="w-4 h-4 mr-2" /> Add Account
            </a>
            <a
              href=""
              class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
            >
              <lock-icon class="w-4 h-4 mr-2" /> Reset Password
            </a>
            <a
              href=""
              class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
            >
              <help-circle-icon class="w-4 h-4 mr-2" /> Help
            </a>
          </div>
          <div class="p-2 border-t border-theme-27 dark:border-dark-3">
            <a
              href=""
              class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
            >
              <toggle-right-icon class="w-4 h-4 mr-2" /> Logout
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Account Menu -->
  </div>
  <!-- END: Top Bar -->
</template>

<script>
import {
  ChevronRightIcon,
  SearchIcon,
  InboxIcon,
  UsersIcon,
  CreditCardIcon,
  BellIcon,
  UserIcon,
  EditIcon,
  LockIcon,
  HelpCircleIcon,
  ToggleRightIcon
} from "vue-feather-icons";
export default {
  components: {
    ChevronRightIcon,
    SearchIcon,
    InboxIcon,
    UsersIcon,
    CreditCardIcon,
    BellIcon,
    UserIcon,
    EditIcon,
    LockIcon,
    HelpCircleIcon,
    ToggleRightIcon
  },
  data() {
    return {
      searchDropdown: false
    };
  },
  mounted() {},
  methods: {
    showSearchDropdown: () => {
      searchDropdown = true;
    },

    hideSearchDropdown: () => {
      searchDropdown = false;
    }
  }
};
</script>
