<template>
  <div ref="tippyRef">
    <slot></slot>
  </div>
</template>

<script>
import tippy, { roundArrow, animateFill } from "tippy.js";

export default {
  props: {
    to: {
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
  methods: {
    init: () => {
      tippy(`[name="${props.to}"]`, {
        plugins: [animateFill],
        content: tippyRef.value,
        allowHTML: true,
        arrow: roundArrow,
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
        animateFill: false,
        animation: "shift-away",
        theme: "light",
        trigger: "click",
        ...props.options
      });
    }
  }
};
</script>
