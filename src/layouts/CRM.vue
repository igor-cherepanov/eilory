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
}
</script>

<style>

</style>