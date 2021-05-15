<template>
  <div class="input-component mb-6">
    <label class="text-gray-500 font-medium mb-1" :for="id">
      {{ label }}
    </label>
    <div>
      <input
        class="
          bg-gray-200
          appearance-none
          border-2 border-gray-200
          rounded
          w-full
          py-2
          px-4
          text-gray-700
          leading-tight
          outline-none
          focus:bg-white
          focus:border-purple-500
        "
        :class="{ 'bg-red-50': error }"
        :id="id"
        :value="modelValue"
        v-bind="$attrs"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <small class="text-red-500">{{ error }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    modelValue: String,
    label: String,
    error: String,
  },
};
</script>
