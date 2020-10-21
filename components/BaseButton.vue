<template>
  <button
    class="btn"
    :class="clr"
    :style="{
      width: isFull ? '100%' : 'auto',
    }"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    clr: {
      type: String,
      default: '',
    },
    isFull: {
      type: Boolean,
    },
  },
  methods: {
    onClick() {
      this.$emit('myclick')
    },
  },
}
</script>
