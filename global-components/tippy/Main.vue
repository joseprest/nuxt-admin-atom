<template>
  <component :is="tag" ref="tippyRef">
    <slot></slot>
  </component>
</template>

<script>
import tippy, { roundArrow, animateFill } from "tippy.js";

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
  methods: {
    init: () => {
      tippy(tippyRef.value, {
        plugins: [animateFill],
        content: props.content,
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
        ...props.options
      });
    },
    bindInstance: () => {}
  }
};
</script>
