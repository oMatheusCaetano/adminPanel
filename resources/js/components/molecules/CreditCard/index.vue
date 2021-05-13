<template>
  <div
    class="
      credit-card
      h-40
      w-72
      rounded-2xl
      py-4
      px-3
      flex flex-col
      justify-between
      text-white
      bg-purple-700
    "
  >
    <div class="relative" @dblclick="enableInputEdit(filteredBankName)">
      <div>
        <input
          :class="`${inputsClasses} w-64`"
          :value="filteredBankName.value"
          :ref="filteredBankName.id"
          v-show="filteredBankName.edit"
          @blur="disableInputEdit(filteredBankName)"
          @keyup.enter="saveInputData(filteredBankName)"
        />
      </div>
      <h6 class="font-bold">{{ filteredBankName.value }}</h6>
    </div>

    <div class="relative" @dblclick="enableInputEdit(filteredUserName)">
      <div>
        <input
          :class="`${inputsClasses} w-64`"
          :value="filteredUserName.value"
          :ref="filteredUserName.id"
          v-show="filteredUserName.edit"
          @blur="disableInputEdit(filteredUserName)"
          @keyup.enter="saveInputData(filteredUserName)"
        />
      </div>
      <h6 class="text-sm">{{ filteredUserName.value }}</h6>
    </div>

    <div class="relative" @dblclick="enableInputEdit(filteredCardNumber)">
      <div>
        <input
          :class="`${inputsClasses} w-64`"
          :value="filteredCardNumber.value"
          :ref="filteredCardNumber.id"
          v-show="filteredCardNumber.edit"
          @blur="disableInputEdit(filteredCardNumber)"
          @keyup.enter="saveInputData(filteredCardNumber)"
        />
      </div>
      <h6 class="font-medium text-lg">{{ filteredCardNumber.value }}</h6>
    </div>

    <footer class="flex justify-around items-end">
      <div
        class="relative"
        v-for="(input, index) in filteredEditableInputs"
        :key="index"
        @dblclick="enableInputEdit(input)"
      >
        <label class="text-xs font-light">{{ input.label }}</label>
        <div>
          <input
            :class="inputsClasses"
            value="07/27"
            :ref="input.id"
            v-show="input.edit"
            @blur="disableInputEdit(input)"
            @keyup.enter="saveInputData(input)"
          />
        </div>
        <p class="leading-3 font-medium">{{ input.value }}</p>
      </div>

      <CreditCardFlag :flag="flag" />
    </footer>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  props: {
    flag: {
      type: String,
      required: true,
    },
    editable: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    inputsClasses:
      'bg-gray-200 appearance-none border-2 border-gray-200 rounded absolute w-24 py-2 px-4 text-gray-700 text-center leading-tight focus:outline-none focus:bg-white focus:border-purple-500',
    editableInputs: [
      {
        category: 1,
        id: 'nubank',
        value: 'Nu Bank',
        edit: false,
      },

      {
        category: 2,
        id: 'matheuscaetano',
        value: 'Matheus dos Santos Caetano',
        edit: false,
      },

      {
        category: 3,
        id: '00000000',
        value: '0000 0000 0000 0000',
        edit: false,
      },

      {
        category: 4,
        label: 'M.S',
        id: 'memberSinceInput',
        value: '01/18',
        edit: false,
      },
      {
        category: 4,
        label: 'V.T',
        id: 'validTrueInput',
        value: '07/27',
        edit: false,
      },
      {
        category: 4,
        label: 'S.C',
        id: 'securityCodeInput',
        value: '457',
        edit: false,
      },
    ],
  }),

  computed: {
    filteredBankName() {
      return this.filterEditableInputsByCategory(1)[0];
    },

    filteredUserName() {
      return this.filterEditableInputsByCategory(2)[0];
    },

    filteredCardNumber() {
      return this.filterEditableInputsByCategory(3)[0];
    },

    filteredEditableInputs() {
      return this.filterEditableInputsByCategory(4);
    },
  },

  methods: {
    enableInputEdit(input) {
      if (!this.editable) return;
      input.edit = true;
      this.focusOnInput(input.id);
    },

    disableInputEdit(input) {
      input.edit = false;
    },

    saveInputData(input) {
      this.disableInputEdit(input);
    },

    focusOnInput(input) {
      this.$nextTick(() => {
        this.$refs[input].focus();
      });
    },

    filterEditableInputsByCategory(category) {
      return this.editableInputs.filter((input) => input.category === category);
    },

    removeSpacesAndMakeLowercase(string) {
      return string.replace(' ', '').toLowerCase();
    },
  },

  components: {
    CreditCardFlag: defineAsyncComponent(() => import('@components/atoms/CreditCardFlag')),
  },
};
</script>
