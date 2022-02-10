<template>
    <navbar></navbar>
    <slot/>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  components: {
    Navbar,
  },
  computed: {},
  mounted() {

  }
}
</script>

<style>

</style>