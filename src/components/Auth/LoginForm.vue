<template>
  <div class="flex justify-center p-6">
    <div class="w-full max-w-sm shadow-lg rounded-lg px-4 py-8 bg-gray-100">
      <div class="flex justify-center pb-6 font-bold text-3xl text-purple-600">
        Login
      </div>
      <inline-input v-model="login" name="login" label="Login" placeholder="login"/>
      <inline-input v-model="password" name="password" label="Password" placeholder="******************"/>

      <div class="md:flex md:items-center space-x-5 justify-center">
        <button
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button" @click="userLogin({login, password})">
          Login
        </button>
        <button
            class="shadow bg-gray-100 hover:bg-gray-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded border-purple-500 border text-purple-500"
            type="button" @click="$emit('swapComponent', 'RegisterForm')">
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import InlineInput from "./UI/InlineInput";
import {mapActions} from "vuex";
import axios from "axios";

export default {
  name: "LoginForm",
  components: {InlineInput},
  data() {
    return {
      login: '',
      password: '',
    }
  },
  methods: {
    ...mapActions({
      userLogin: "user/login",
    }),

  }
}
</script>

<style scoped>

</style>