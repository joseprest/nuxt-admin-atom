<template>
  <component :is="tag" ref="tippyRef">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: "span"
    },
    options: {
      type: Object,
      default: () => ({})
    },
    refKey: {
      type: String,
      default: null
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$tippy(this.$refs.tippyRef, {
        content: this.content,
        popperOptions: {
          modifiers: [
            {
              name: "preventOverflow",
              options: {
                rootBoundary: "viewport"
              }
            }
          ]
        },
        animation: "shift-away",
        ...this.options
      });
    },
    bindInstance: () => {}
  }
};
</script>
