import { defineAsyncComponent } from 'vue';

export default {
  TrashIcon: defineAsyncComponent(() => import('@heroicons/vue/outline/TrashIcon')),
  CreditCardSlider: defineAsyncComponent(() => import('@components/organisms/CreditCardSlider')),
  CreditCard: defineAsyncComponent(() => import('@components/molecules/CreditCard')),
  TitleInput: defineAsyncComponent(() => import('@components/atoms/TitleInput')),
  InputWithLabel: defineAsyncComponent(() => import('@components/atoms/InputWithLabel')),
  Button: defineAsyncComponent(() => import('@components/atoms/Button')),
  Dropdown: defineAsyncComponent(() => import('@components/atoms/Dropdown')),
  IconButton: defineAsyncComponent(() => import('@components/atoms/IconButton')),
};
