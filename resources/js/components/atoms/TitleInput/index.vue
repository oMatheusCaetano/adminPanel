<template>
  <div>
    <input
      class="text-4xl font-medium text-gray-800 outline-none block"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <small class="text-red-500">{{ error }}</small>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    error: String,
  },
};
</script>
