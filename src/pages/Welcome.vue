<template>
  <div class="md:flex items-center">
    <div class="md:w-1/2 items-center justify-center flex md:h-screen py-16 backdrop-blur-xl">
<!--         :style="{'background-image': 'url(' + require('@/assets/images/login-bg.png') + ')',  'background-size':'cover'}" >-->
      <span class="text-purple-600 font-bold text-5xl">
      Eilory
      </span>
    </div>
    <div class="md:w-1/2 items-center justify-center flex md:h-screen bg-purple-400 shadow-lg">
      <auth/>
    </div>

  </div>
</template>

<script>
import Auth from "../components/Auth/Auth";
export default {
  components: {Auth}
}
</script>

<style scoped>

</style>