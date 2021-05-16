<template>
  <swiper
    class="credit-card-component a w-80 h-60"
    :options="swiperOption"
    @swiper="swiper"
    @slideChange="slideChange"
  >
    <swiper-slide class="pl-4 pt-10" v-for="(card, index) in cards" :key="index">
      <CreditCard class="shadow-xl" :card="card" />
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { defineAsyncComponent } from 'vue';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';

export default {
  props: { cards: Array, onSwiper: Function, onSlideChange: Function },

  data: () => ({ swiperOption: {} }),

  methods: {
    swiper(data) {
      if (this.onSwiper !== undefined) this.onSwiper(data);
    },

    slideChange(data) {
      if (this.onSlideChange !== undefined) this.onSlideChange(data);
    },
  },

  components: {
    Swiper,
    SwiperSlide,
    CreditCard: defineAsyncComponent(() => import('@components/molecules/CreditCard')),
  },
};
</script>

<style lang="scss" scoped>
.credit-card-component {
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
}
</style>
