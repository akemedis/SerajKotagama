<template>
  <a
    href="#"
    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    aria-current="page"
    >{{ title }}</a
  >
</template>

<script>
export default {
  name: 'nav-button',
  props: {
    title: String,
  },
}
</script>

<style></style>
