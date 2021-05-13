<template>
  <div>
    <CreditCard
      editable
      flag="Master Card"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
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
