<template>
  <div class="flex justify-center p-6">
    <div class="w-full max-w-sm shadow-lg rounded-lg px-4 py-8 bg-gray-100">
      <div class="flex justify-center pb-6 font-bold text-3xl text-purple-600">
        Register
      </div>
      <inline-input :name="'f_name'" :label="'First Name'" :placeholder="'first name'"/>
      <inline-input :name="'l_name'" :label="'Last Name'" :placeholder="'last name'"/>
      <inline-input :name="'login'" :label="'Login'" :placeholder="'login'"/>
      <inline-input :name="'password'" :label="'Password'" :placeholder="'******************'"/>
      <inline-input :name="'confirm_password'" :label="'Confirm'" :placeholder="'******************'"/>
<!--      <div class="md:flex md:items-center mb-6">-->
<!--        <div class="md:w-1/3"></div>-->
<!--        <label class="md:w-2/3 block text-gray-500 font-bold">-->
<!--          <input class="mr-2 leading-tight" type="checkbox">-->
<!--          <span class="text-sm">-->
<!--        Send me your newsletter!-->
<!--      </span>-->
<!--        </label>-->
<!--      </div>-->
      <div class="md:flex md:items-center space-x-5 justify-center">
        <button
            class="shadow bg-gray-100 hover:bg-gray-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded border-purple-500 border text-purple-500"
            type="button" @click="$emit('swapComponent', 'LoginForm')">
          Login
        </button>
        <button
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button" @click="register">
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import InlineInput from "./UI/InlineInput";
export default {
  name: "RegisterForm",
  components: {InlineInput},
  methods:{
    register(){

    }
  }
}
</script>

<style scoped>

</style>