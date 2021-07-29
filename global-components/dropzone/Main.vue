<template>
  <div ref="fileUploadRef" v-file-upload="{ options }" class="dropzone">
    <div class="dz-message">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Dropzone from "dropzone";

export default {
  directives: {
    fileUpload: {
      bind(el, binding) {
        Dropzone.autoDiscover = false;
        el.dropzone = new Dropzone(el, binding.value.options);
      }
    }
  },
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    refKey: {
      type: String,
      default: null
    }
  },
  methods: {},
  mounted() {}
};
</script>
