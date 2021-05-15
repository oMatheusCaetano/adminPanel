<template>
  <div
    class="
      credit-card-component
      h-40
      w-72
      rounded-2xl
      py-4
      px-3
      flex flex-col
      justify-between
    "
    :style="`background: ${card.color}; color: ${card.text_color}`"
    v-if="card"
  >
    <div class="relative" @dblclick="enableInputEdit(generateId('bank_name'))">
      <div>
        <input
          v-show="editingInput === generateId('bank_name')"
          :ref="generateId('bank_name')"
          :class="`${inputsClasses} w-64`"
          :value="card.bank_name"
          @blur="disableInputEdit()"
          @keyup.enter="saveInputData($event.target.value, 'bank_name')"
        />
      </div>
      <LoadingSpinner v-if="editingInputLoading === generateId('bank_name')" size="13px" />
      <h6 class="font-bold" v-else>{{ card.bank_name }}</h6>
    </div>

    <div class="relative" @dblclick="enableInputEdit(generateId('owner_name'))">
      <div>
        <input
          v-show="editingInput === generateId('owner_name')"
          :ref="generateId('owner_name')"
          :class="`${inputsClasses} w-64`"
          :value="card.owner_name"
          @blur="disableInputEdit()"
          @keyup.enter="saveInputData($event.target.value, 'owner_name')"
        />
      </div>
      <LoadingSpinner v-if="editingInputLoading === generateId('owner_name')" size="10px" />
      <h6 class="text-sm" v-else>{{ card.owner_name }}</h6>
    </div>

    <div class="relative" @dblclick="enableInputEdit(generateId('number'))">
      <div>
        <input
          v-show="editingInput === generateId('number')"
          v-maska="'#### #### #### ####'"
          :ref="generateId('number')"
          :class="`${inputsClasses} w-64`"
          :value="card.number"
          @blur="disableInputEdit()"
          @keyup.enter="saveInputData($event.target.value, 'number')"
        />
      </div>
      <LoadingSpinner v-if="editingInputLoading === generateId('number')" size="10px" />
      <h6 class="font-medium text-lg" v-else>{{ card.number }}</h6>
    </div>

    <footer class="flex justify-around items-end">
      <div class="relative" @dblclick="enableInputEdit(generateId('member_since'))">
        <label class="text-xs font-light">M.S</label>
        <div>
          <input
            v-show="editingInput === generateId('member_since')"
            v-maska="'##/##'"
            :ref="generateId('member_since')"
            :class="`${inputsClasses} w-8`"
            :value="card.member_since"
            @blur="disableInputEdit()"
            @keyup.enter="saveInputData($event.target.value, 'member_since')"
          />
        </div>
        <LoadingSpinner v-if="editingInputLoading === generateId('member_since')" size="12px" />
        <p class="leading-3 font-medium" v-else>{{ card.member_since }}</p>
      </div>

      <div class="relative" @dblclick="enableInputEdit(generateId('valid_thru'))">
        <label class="text-xs font-light">V.T</label>
        <div>
          <input
            v-show="editingInput === generateId('valid_thru')"
            v-maska="'##/##'"
            :ref="generateId('valid_thru')"
            :class="`${inputsClasses} w-8`"
            :value="card.valid_thru"
            @blur="disableInputEdit()"
            @keyup.enter="saveInputData($event.target.value, 'valid_thru')"
          />
        </div>
        <LoadingSpinner v-if="editingInputLoading === generateId('valid_thru')" size="12px" />
        <p class="leading-3 font-medium" v-else>{{ card.valid_thru }}</p>
      </div>

      <div class="relative" @dblclick="enableInputEdit(generateId('security_code'))">
        <label class="text-xs font-light">S.C</label>
        <div>
          <input
            v-show="editingInput === generateId('security_code')"
            v-maska="'###'"
            :ref="generateId('security_code')"
            :class="`${inputsClasses} w-8`"
            :value="card.security_code"
            @blur="disableInputEdit()"
            @keyup.enter="saveInputData($event.target.value, 'security_code')"
          />
        </div>
        <LoadingSpinner v-if="editingInputLoading === generateId('security_code')" size="12px" />
        <p class="leading-3 font-medium" v-else>{{ card.security_code }}</p>
      </div>

      <CreditCardFlag :flag="card.flag" v-if="card?.flag" />
    </footer>
  </div>

  <div
    v-else
    class="
      credit-card-component
      h-40
      w-72
      rounded-2xl
      py-4
      px-3
      flex flex-col
      justify-between
      bg-purple-500
      text-white
    "
  >
    <div class="relative">
      <h6 class="font-bold">{{ card?.bank_name ?? ' ' }}</h6>
    </div>

    <div class="relative">
      <h6 class="text-sm">{{ card?.owner_name ?? ' ' }}</h6>
    </div>

    <div class="relative">
      <h6 class="font-medium text-lg">{{ card?.number ?? ' ' }}</h6>
    </div>

    <footer class="flex justify-around items-end">
      <div class="relative">
        <label class="text-xs font-light">M.S</label>
        <p class="leading-3 font-medium">{{ card?.member_since ?? ' ' }}</p>
      </div>

      <div class="relative">
        <label class="text-xs font-light">V.T</label>
        <p class="leading-3 font-medium">{{ card?.valid_thru ?? ' ' }}</p>
      </div>

      <div class="relative">
        <label class="text-xs font-light">S.C</label>
        <p class="leading-3 font-medium">{{ card?.security_code }}</p>
      </div>

      <CreditCardFlag :flag="card.flag" v-if="card?.flag" />
    </footer>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  props: {
    card: {
      type: Object,
      default: null,
    },
    textColor: {
      type: String,
      default: 'white',
    },
    onEdit: Function,
    editable: Boolean,
  },

  data: () => ({
    editingInput: '',
    editingInputLoading: '',
    isInputEditing: false,
    inputsClasses:
      'bg-gray-200 appearance-none border-2 border-gray-200 rounded absolute w-24 py-2 px-4 text-gray-700 text-center leading-tight focus:outline-none focus:bg-white focus:border-purple-500',
  }),

  methods: {
    enableInputEdit(input) {
      if (!this.editable || this.isInputEditing) return;
      this.editingInput = input;
      this.focusOnInput(input);
    },

    disableInputEdit() {
      this.editingInput = '';
    },

    async saveInputData(newValue, field) {
      this.disableInputEdit();
      this.editingInputLoading = this.generateId(field);
      this.isInputEditing = true;
      if (this.onEdit) await this.onEdit(this.getRequestObject(newValue, field));
      this.editingInputLoading = '';
      this.isInputEditing = false;
    },

    focusOnInput(input) {
      this.$nextTick(() => {
        this.$refs[input].focus();
      });
    },

    getRequestObject(newValue, field) {
      return {
        original: this.card,
        newValue,
        field,
        edited: { ...this.card, [field]: newValue },
      };
    },

    generateId(field) {
      return `${this.card[field]}-${this.card.number}`;
    },
  },

  components: {
    CreditCardFlag: defineAsyncComponent(() => import('@components/atoms/CreditCardFlag')),
    LoadingSpinner: defineAsyncComponent(() => import('@components/atoms/LoadingSpinner')),
  },
};
</script>

<style lang="scss" scoped>
.credit-card-component {
  min-width: 18rem;
  max-width: 18rem;
}
</style>
