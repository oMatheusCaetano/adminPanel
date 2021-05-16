<template>
  <div class="input-component mb-6">
    <label class="text-gray-500 font-medium mb-1" :for="id">
      {{ label }}
    </label>
    <small class="text-gray-400 ml-2">{{ subLabel }}</small>
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
          h-10
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
    modelValue: {
      required: false,
    },
    label: String,
    subLabel: String,
    error: String,
    color: Boolean,
  },
};
</script>
