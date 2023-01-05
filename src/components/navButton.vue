<template>
  <a
    href="{{link}}"
    class="
      text-gray-300
      hover:underline hover:underline-offset-3 hover:decoration-4 hover:decoration-green-500 hover:text-white
      block
      px-3
      py-2
      rounded-md
      text-base
      font-medium
      move
    "
    @mouseover="startPulse"
    @mouseleave="stopPulse"
    >{{ title }}</a
  >
</template>

<script>
import anime from 'animejs'
export default {
  name: 'nav-button',
  props: {
    title: String,
    link: String,
  },
  data() {
    return {
      pulseAnimation: null,
    }
  },
  mounted() {
    this.pulseAnimation = anime({
      targets: this.$el,
      color: [
        { value: '#00FF00', duration: 500 },
        { value: '#009900', duration: 500 },
      ],
      easing: 'linear',
      loop: true,
      direction: 'alternate',
    })
  },
  methods: {
    startPulse() {
      this.pulseAnimation.play()
    },
    stopPulse() {
      this.pulseAnimation.pause()
    },
  },
  beforeDestroy() {
    this.pulseAnimation.pause()
  },
}
</script>

<style></style>
