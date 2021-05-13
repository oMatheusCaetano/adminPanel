<template>
  <div>
    <CreditCard editable :card="card" :onEdit="updateCreditCard" />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  data: () => ({
    card: {
      id: 'uniqueid',
      bankName: 'Nu Bank',
      ownerName: 'Matheus dos Santos Caetano',
      number: '0000000000000000',
      memberSince: '02/18',
      validThru: '07/27',
      securityCode: '453',
      flag: 'Master Card',
    },
  }),

  methods: {
    async updateCreditCard(data) {
      // eslint-disable-next-line no-console
      console.log(data);
      let count = 200;
      while (count > 0) {
        // eslint-disable-next-line no-await-in-loop
        await fetch('https://jsonplaceholder.typicode.com/posts');
        count--;
      }
    },
  },

  components: {
    CreditCard: defineAsyncComponent(() => import('@components/molecules/CreditCard')),
  },
};
</script>

<style lang="scss" scoped>
.credit-card {
  margin: 20px;
}
</style>
