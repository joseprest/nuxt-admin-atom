<template>
  <Tippy
    :tag="tag"
    :options="{
      placement: 'left'
    }"
    ref="sideMenuTooltipRef"
  >
    <slot></slot>
  </Tippy>
</template>

<script>
import Tippy from "@/global-components/tippy/Main.vue";

export default {
  components: {
    Tippy
  },
  props: {
    tag: {
      type: String,
      default: "span"
    }
  },
  data() {
    return {
      tippyRef: null
    };
  },
  mounted() {
    this.tippyRef = this.$refs.sideMenuTooltipRef;
    toggleTooltip();
    initTooltipEvent();
  },
  methods: {
    toggleTooltip: () => {
      const el = tippyRef.value;
      if (cash(window).width() <= 1260) {
        el._tippy.enable();
      } else {
        el._tippy.disable();
      }
    },
    initTooltipEvent: () => {
      window.addEventListener("resize", () => {
        this.toggleTooltip();
      });
    }
  }
};
</script>
