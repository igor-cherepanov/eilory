<template>
    <component :is="layout">
      <router-view/>
    </component>
</template>

<script>
import Site from './layouts/Site.vue'
import CRM from './layouts/CRM.vue'

const defaultLayout = 'Site'
export default {

  components: {Site, CRM},
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout)
    }
  },
}
</script>

<style lang="postcss">
body {
  @apply bg-gray-100
}
</style>