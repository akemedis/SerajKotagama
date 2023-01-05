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
}
</script>

<style></style>
