<template>
  <a
    href="{{link}}"
    class="
      text-gray-300
      hover:underline hover:decoration-4 hover:decoration-green-500 hover:text-white
      block
      px-3
      py-2
      rounded-md
      text-base
      font-medium
    "
    aria-current="page"
    >{{ title }}</a
  >
</template>

<script>
export default {
  name: 'nav-button',
  props: {
    title: String,
    link: String,
  },
}
</script>

<style></style>
