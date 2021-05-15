<template>
  <div>
    <CreditCardSlider :cards="cards" />
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue';

export default {
  data: () => ({
    cards: [
      {
        id: 'uniqueid',
        bankName: 'Nu Bank',
        ownerName: 'Matheus dos Santos Caetano',
        number: '0000 0000 0000 0000',
        memberSince: '02/18',
        validThru: '07/27',
        securityCode: '453',
        flag: 'Master Card',
      },
      {
        id: 'uniqueid',
        bankName: 'Nu Bank',
        ownerName: 'Matheus dos Santos Caetano',
        number: '0000 0000 0000 0000',
        memberSince: '02/18',
        validThru: '07/27',
        securityCode: '453',
        flag: 'Master Card',
      },
    ],
  }),

  components: {
    CreditCardSlider: defineAsyncComponent(() => import('@components/organisms/CreditCardSlider')),
  },
};
</script>
