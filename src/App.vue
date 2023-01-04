<template>
  <main id="app">
    <navigation />
    <router-view />
  </main>
</template>
<script>
import navigation from './components/nav.vue'
export default {
  name: 'App',
  components: {
    navigation,
  },
}
</script>

<style>
#app {
}
</style>
