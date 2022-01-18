<template>
  <div class="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {Navbar}
}
</script>

<style lang="postcss">
  body{
    @apply bg-gray-200
  }
</style>