<template>
  <component :is="component" :selectedComponent="component"  @swapComponent="swapComponent">
  </component>
</template>

<script>
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default {
  name: "Auth",
  components: {RegisterForm, LoginForm},
  data() {
    return {
      component: LoginForm
    }
  },
  methods: {
    swapComponent(name){
      this.component = name
    }
  }
}
</script>

<style scoped>

</style>