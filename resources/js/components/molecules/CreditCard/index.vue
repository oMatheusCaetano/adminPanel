<template>
  <div
    class="
      credit-card-component
      h-40
      rounded-2xl
      py-4
      px-3
      flex flex-col
      justify-between
    "
    :style="`background: ${color}; color: ${textColor}`"
  >
    <div class="relative" @dblclick="enableInputEdit(generateId('bankName'))">
      <div>
        <input
          v-show="editingInput === generateId('bankName')"
          :ref="generateId('bankName')"
          :class="`${inputsClasses} w-64`"
          :value="card.bankName"
          @blur="disableInputEdit()"
          @keyup.enter="saveInputData($event.target.value, 'bankName')"
        />
      </div>
      <LoadingSpinner v-if="editingInputLoading === generateId('bankName')" size="13px" />
      <h6 class="font-bold" v-else>{{ card.bankName }}</h6>
    </div>

    <div class="relative" @dblclick="enableInputEdit(generateId('ownerName'))">
      <div>
        <input
          v-show="editingInput === generateId('ownerName')"
          :ref="generateId('ownerName')"
          :class="`${inputsClasses} w-64`"
          :value="card.ownerName"
          @blur="disableInputEdit()"
          @keyup.enter="saveInputData($event.target.value, 'ownerName')"
        />
      </div>
      <LoadingSpinner v-if="editingInputLoading === generateId('ownerName')" size="10px" />
      <h6 class="text-sm" v-else>{{ card.ownerName }}</h6>
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
      <div class="relative" @dblclick="enableInputEdit(generateId('memberSince'))">
        <label class="text-xs font-light">M.S</label>
        <div>
          <input
            v-show="editingInput === generateId('memberSince')"
            v-maska="'##/##'"
            :ref="generateId('memberSince')"
            :class="`${inputsClasses} w-8`"
            :value="card.memberSince"
            @blur="disableInputEdit()"
            @keyup.enter="saveInputData($event.target.value, 'memberSince')"
          />
        </div>
        <LoadingSpinner v-if="editingInputLoading === generateId('memberSince')" size="12px" />
        <p class="leading-3 font-medium" v-else>{{ card.memberSince }}</p>
      </div>

      <div class="relative" @dblclick="enableInputEdit(generateId('validThru'))">
        <label class="text-xs font-light">V.T</label>
        <div>
          <input
            v-show="editingInput === generateId('validThru')"
            v-maska="'##/##'"
            :ref="generateId('validThru')"
            :class="`${inputsClasses} w-8`"
            :value="card.validThru"
            @blur="disableInputEdit()"
            @keyup.enter="saveInputData($event.target.value, 'validThru')"
          />
        </div>
        <LoadingSpinner v-if="editingInputLoading === generateId('validThru')" size="12px" />
        <p class="leading-3 font-medium" v-else>{{ card.validThru }}</p>
      </div>

      <div class="relative" @dblclick="enableInputEdit(generateId('securityCode'))">
        <label class="text-xs font-light">S.C</label>
        <div>
          <input
            v-show="editingInput === generateId('securityCode')"
            v-maska="'###'"
            :ref="generateId('securityCode')"
            :class="`${inputsClasses} w-8`"
            :value="card.securityCode"
            @blur="disableInputEdit()"
            @keyup.enter="saveInputData($event.target.value, 'securityCode')"
          />
        </div>
        <LoadingSpinner v-if="editingInputLoading === generateId('securityCode')" size="12px" />
        <p class="leading-3 font-medium" v-else>{{ card.securityCode }}</p>
      </div>

      <CreditCardFlag :flag="card.flag" />
    </footer>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
    color: {
      type: String,
      default: 'purple',
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
