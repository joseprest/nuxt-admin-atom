<template>
  <div class="grid grid-cols-12 gap-6 mt-8">
    <div class="col-span-12 lg:col-span-3 xxl:col-span-2">
      <h2 class="mt-2 mr-auto text-lg font-medium intro-y">File Manager</h2>
      <!-- BEGIN: File Manager Menu -->
      <div class="p-5 mt-6 intro-y box">
        <div class="mt-1">
          <a
            href=""
            class="flex items-center px-3 py-2 font-medium text-white rounded-md bg-theme-1"
          >
            <ImageIcon class="w-4 h-4 mr-2" /> Images
          </a>
          <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
            <VideoIcon class="w-4 h-4 mr-2" /> Videos
          </a>
          <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
            <FileIcon class="w-4 h-4 mr-2" /> Documents
          </a>
          <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
            <UsersIcon class="w-4 h-4 mr-2" /> Shared
          </a>
          <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
            <TrashIcon class="w-4 h-4 mr-2" /> Trash
          </a>
        </div>
        <div class="pt-4 mt-4 border-t border-gray-200 dark:border-dark-5">
          <a href="" class="flex items-center px-3 py-2 rounded-md">
            <div class="w-2 h-2 mr-3 rounded-full bg-theme-11"></div>
            Custom Work
          </a>
          <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
            <div class="w-2 h-2 mr-3 rounded-full bg-theme-9"></div>
            Important Meetings
          </a>
          <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
            <div class="w-2 h-2 mr-3 rounded-full bg-theme-12"></div>
            Work
          </a>
          <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
            <div class="w-2 h-2 mr-3 rounded-full bg-theme-11"></div>
            Design
          </a>
          <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
            <div class="w-2 h-2 mr-3 rounded-full bg-theme-6"></div>
            Next Week
          </a>
          <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
            <PlusIcon class="w-4 h-4 mr-2" /> Add New Label
          </a>
        </div>
      </div>
      <!-- END: File Manager Menu -->
    </div>
    <div class="col-span-12 lg:col-span-9 xxl:col-span-10">
      <!-- BEGIN: File Manager Filter -->
      <div class="flex flex-col-reverse items-center intro-y sm:flex-row">
        <div class="relative w-full mt-3 mr-auto sm:w-auto sm:mt-0">
          <SearchIcon
            class="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 text-gray-700 dark:text-gray-300"
          />
          <input
            type="text"
            class="w-full px-10 text-gray-700 form-control sm:w-64 box dark:text-gray-300 placeholder-theme-13"
            placeholder="Search files"
          />
          <div
            class="absolute inset-y-0 right-0 flex items-center mr-3 inbox-filter dropdown"
            data-placement="bottom-start"
          >
            <ChevronDownIcon
              class="w-4 h-4 text-gray-700 cursor-pointer dropdown-toggle dark:text-gray-300"
              role="button"
              aria-expanded="false"
            />
            <div class="pt-2 inbox-filter__dropdown-menu dropdown-menu">
              <div class="p-5 dropdown-menu__content box">
                <div class="grid grid-cols-12 gap-4 gap-y-3">
                  <div class="col-span-6">
                    <label for="input-filter-1" class="text-xs form-label"
                      >File Name</label
                    >
                    <input
                      id="input-filter-1"
                      type="text"
                      class="flex-1 form-control"
                      placeholder="Type the file name"
                    />
                  </div>
                  <div class="col-span-6">
                    <label for="input-filter-2" class="text-xs form-label"
                      >Shared With</label
                    >
                    <input
                      id="input-filter-2"
                      type="text"
                      class="flex-1 form-control"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div class="col-span-6">
                    <label for="input-filter-3" class="text-xs form-label"
                      >Created At</label
                    >
                    <input
                      id="input-filter-3"
                      type="text"
                      class="flex-1 form-control"
                      placeholder="Important Meeting"
                    />
                  </div>
                  <div class="col-span-6">
                    <label for="input-filter-4" class="text-xs form-label"
                      >Size</label
                    >
                    <select id="input-filter-4" class="flex-1 form-select">
                      <option>10</option>
                      <option>25</option>
                      <option>35</option>
                      <option>50</option>
                    </select>
                  </div>
                  <div class="flex items-center col-span-12 mt-3">
                    <button class="w-32 ml-auto btn btn-secondary">
                      Create Filter
                    </button>
                    <button class="w-32 ml-2 btn btn-primary">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full sm:w-auto">
          <button class="mr-2 shadow-md btn btn-primary">
            Upload New Files
          </button>
          <div class="dropdown">
            <button
              class="px-2 text-gray-700 dropdown-toggle btn box dark:text-gray-300"
              aria-expanded="false"
            >
              <span class="flex items-center justify-center w-5 h-5">
                <PlusIcon class="w-4 h-4" />
              </span>
            </button>
            <div class="w-40 dropdown-menu">
              <div class="p-2 dropdown-menu__content box dark:bg-dark-1">
                <a
                  href=""
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white rounded-md dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2"
                >
                  <FileIcon class="w-4 h-4 mr-2" /> Share Files
                </a>
                <a
                  href=""
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white rounded-md dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2"
                >
                  <SettingsIcon class="w-4 h-4 mr-2" /> Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: File Manager Filter -->
      <!-- BEGIN: Directory & Files -->
      <div class="grid grid-cols-12 gap-3 mt-5 intro-y sm:gap-6">
        <div
          v-for="(faker, fakerKey) in $f()"
          :key="fakerKey"
          class="col-span-6 intro-y sm:col-span-4 md:col-span-3 xxl:col-span-2"
        >
          <div
            class="relative px-3 px-5 pt-8 pb-5 rounded-md file box sm:px-5 zoom-in"
          >
            <div class="absolute top-0 left-0 mt-3 ml-3">
              <input
                class="border border-gray-500 form-check-input"
                type="checkbox"
              />
            </div>
            <a
              v-if="faker.files[0].type == 'Empty Folder'"
              href=""
              class="w-3/5 mx-auto file__icon file__icon--empty-directory"
            ></a>
            <a
              v-else-if="faker.files[0].type == 'Folder'"
              href=""
              class="w-3/5 mx-auto file__icon file__icon--directory"
            ></a>
            <a
              v-else-if="faker.files[0].type == 'Image'"
              href=""
              class="w-3/5 mx-auto file__icon file__icon--image"
            >
              <div class="file__icon--image__preview image-fit">
                <img
                  alt="Icewall Tailwind HTML Admin Template"
                  :src="
                    require(`@/assets/images/${$_.toLower(
                      faker.files[0]['fileName']
                    )}`)
                  "
                />
              </div>
            </a>
            <a v-else href="" class="w-3/5 mx-auto file__icon file__icon--file">
              <div class="file__icon__file-name">
                {{ faker.files[0].type }}
              </div>
            </a>
            <a href="" class="block mt-4 font-medium text-center truncate">{{
              faker.files[0].fileName
            }}</a>
            <div class="text-gray-600 text-xs text-center mt-0.5">
              {{ faker.files[0].size }}
            </div>
            <div class="absolute top-0 right-0 mt-2 ml-auto mr-2 dropdown">
              <a
                class="block w-5 h-5 dropdown-toggle"
                href="javascript:;"
                aria-expanded="false"
              >
                <MoreVerticalIcon class="w-5 h-5 text-gray-600" />
              </a>
              <div class="w-40 dropdown-menu">
                <div class="p-2 dropdown-menu__content box dark:bg-dark-1">
                  <a
                    href=""
                    class="flex items-center block p-2 transition duration-300 ease-in-out bg-white rounded-md dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2"
                  >
                    <UsersIcon class="w-4 h-4 mr-2" /> Share File
                  </a>
                  <a
                    href=""
                    class="flex items-center block p-2 transition duration-300 ease-in-out bg-white rounded-md dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2"
                  >
                    <TrashIcon class="w-4 h-4 mr-2" /> Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Directory & Files -->
      <!-- BEGIN: Pagination -->
      <div
        class="flex flex-wrap items-center mt-6 intro-y sm:flex-row sm:flex-nowrap"
      >
        <ul class="pagination">
          <li>
            <a class="pagination__link" href="">
              <ChevronsLeftIcon class="w-4 h-4" />
            </a>
          </li>
          <li>
            <a class="pagination__link" href="">
              <ChevronLeftIcon class="w-4 h-4" />
            </a>
          </li>
          <li>
            <a class="pagination__link" href="">...</a>
          </li>
          <li>
            <a class="pagination__link" href="">1</a>
          </li>
          <li>
            <a class="pagination__link pagination__link--active" href="">2</a>
          </li>
          <li>
            <a class="pagination__link" href="">3</a>
          </li>
          <li>
            <a class="pagination__link" href="">...</a>
          </li>
          <li>
            <a class="pagination__link" href="">
              <ChevronRightIcon class="w-4 h-4" />
            </a>
          </li>
          <li>
            <a class="pagination__link" href="">
              <ChevronsRightIcon class="w-4 h-4" />
            </a>
          </li>
        </ul>
        <select class="w-20 mt-3 form-select box sm:mt-0">
          <option>10</option>
          <option>25</option>
          <option>35</option>
          <option>50</option>
        </select>
      </div>
      <!-- END: Pagination -->
    </div>
  </div>
</template>

<script>
import {
  ImageIcon,
  VideoIcon,
  SearchIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronsRightIcon,
  ChevronsLeftIcon,
  ChevronLeftIcon,
  PlusIcon,
  FileIcon,
  SettingsIcon,
  MoreVerticalIcon,
  UsersIcon,
  TrashIcon
} from "vue-feather-icons";

export default {
  components: {
    ImageIcon,
    VideoIcon,
    FileIcon,
    UsersIcon,
    TrashIcon,
    SearchIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    ChevronsRightIcon,
    ChevronsLeftIcon,
    ChevronLeftIcon,
    PlusIcon,
    FileIcon,
    SettingsIcon,
    MoreVerticalIcon,
    UsersIcon,
    TrashIcon
  },
  data() {
    return {
      ldash: null
    };
  },
  mounted() {
    console.log(this.$f());
    console.log(this.$_());
  }
};
</script>
