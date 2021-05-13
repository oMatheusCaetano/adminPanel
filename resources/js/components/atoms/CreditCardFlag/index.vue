<template>
  <div class="credit-card-flag-component">
    <div
      class="flex flex-col justify-center items-center"
      v-if="formatedFlag === 'mastercard' || formatedFlag === 'master'"
    >
      <MasterCardCreditCardFlag />
      <small class="text-xs mt-6 leading-3" v-if="!withoutName">
        {{ formatedName }}
      </small>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  props: {
    flag: {
      type: String,
      default: '',
    },
    name: String,
    withoutName: Boolean,
  },

  computed: {
    formatedFlag() {
      const flagWithoutSpaces = this.flag.replace(' ', '');
      return flagWithoutSpaces.toLowerCase();
    },

    formatedName() {
      return this.name ?? this.flag;
    },
  },

  components: {
    MasterCardCreditCardFlag: defineAsyncComponent(() => import('@components/atoms/MasterCardCreditCardFlag')),
  },
};
</script>
