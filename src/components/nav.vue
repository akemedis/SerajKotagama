<template>
  <div>
    <div class="min-h-full">
      <nav class="bg-gradient-to-r from-blue-700 to-cyan-600">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <h2 class="text-white font-anu text-2xl text-white-100">SERAJ KOTAGAMA</h2>
                  <navbutton title="Thoughts" />
                  <navbutton title="Essays" />
                  <navbutton title="Visual Diary" />
                  <navbutton title="Biotechnology" />
                  <navbutton title="Consultancy" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="md:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <h2 class="text-white font-anu text-2xl text-white-100 block px-3 py-2">SERAJ KOTAGAMA</h2>
            <navbutton title="Thoughts" />
            <navbutton title="Essays" />
            <navbutton title="Visual Diary" />
            <navbutton title="Biotechnology" />
            <navbutton title="Consultancy" />
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import navButton from './navButton.vue'
import anime from 'animejs'
export default {
  name: 'navigation',
  components: {
    navbutton: navButton,
  },
}
</script>

<style></style>
