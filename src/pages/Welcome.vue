<template>
  <div class="md:flex items-center">
    <div class="md:w-1/2 items-center justify-center flex md:h-screen py-16 bg-logout">
      <span class="text-purple-600 font-bold text-5xl">
      Eilory
      </span>
    </div>
    <div class="md:w-1/2 items-center justify-center flex md:h-screen bg-purple-400 shadow-lg">
      <div class="flex justify-center p-6">
        <div class="w-full max-w-sm shadow-lg rounded-lg px-4 py-8 bg-gray-100">
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Login
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name" type="text" value="Jane Doe">
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                Password
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-password" type="password" placeholder="******************">
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3"></div>
            <label class="md:w-2/3 block text-gray-500 font-bold">
              <input class="mr-2 leading-tight" type="checkbox">
              <span class="text-sm">
        Send me your newsletter!
      </span>
            </label>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                  class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>