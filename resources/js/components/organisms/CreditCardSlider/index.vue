<template>
  <swiper class="w-80 h-60" :options="swiperOption">
    <swiper-slide
      class="pl-4 pt-10"
      v-for="(card, index) in cards"
      :key="index"
    >
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
  props: { cards: Array },

  data: () => ({ swiperOption: {} }),

  components: {
    Swiper,
    SwiperSlide,
    CreditCard: defineAsyncComponent(() => import('@components/molecules/CreditCard')),
  },
};
</script>
