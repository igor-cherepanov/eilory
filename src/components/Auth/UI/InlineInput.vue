<template>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" :for="`inline-${name}`">
        {{ label }}
      </label>
    </div>
    <div class="md:w-2/3">
      <input
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700
          leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          :id="`inline-${name}`"
          :placeholder="placeholder"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)">

    </div>
  </div>
</template>

<script>

export default {
  name: "InlineInput",
  props: {
    modelValue: {
      type: String,
      default: null
    },
    name: {
      type: String,
      required: true,
    },
    label: String,
    placeholder: {
      type: String,
      default: '',
    },
  }
}
</script>

<style scoped>

</style>