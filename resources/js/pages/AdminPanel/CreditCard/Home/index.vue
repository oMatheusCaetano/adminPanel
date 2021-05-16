<template>
  <div class="credit-card-page">
    <main class="max-w-4xl pb-5 px-5 pl-10 pt-8">
      <Dropdown />

      <form class="credit-card">
        <header class="flex flex-col md:flex-row items-center relative">
          <div>
            <CreditCardSlider
              v-if="cards?.data?.length > 0"
              :cards="cards.data"
              :onSlideChange="onSlideChange"
            />

            <div class="h-60 w-80 pl-4 pt-10" v-else>
              <CreditCard :card="card" />
            </div>
          </div>

          <div class="mt-6 mb-8 md:ml-12">
            <TitleInput
              v-model="card.bank_name"
              placeholder="Insira o nome do banco"
              :error="errors.bank_name ? errors.bank_name[0] : ''"
            />
          </div>

          <IconButton class="absolute top-5 right-0" v-if="edit">
            <TrashIcon class="text-red-500" />
          </IconButton>
        </header>

        <main>
          <div class="flex justify-between">
            <InputWithLabel
              type="color"
              label="Cor do cartão"
              id="cardColor"
              class="w-60"
              v-model="card.color"
              :error="errors.color ? errors.color[0] : ''"
            />

            <InputWithLabel
              type="color"
              label="Cor do texto"
              id="cardTextColor"
              class="w-60"
              v-model="card.text_color"
              :error="errors.text_color ? errors.text_color[0] : ''"
            />

            <InputWithLabel
              class="w-60"
              label="Bandeira do cartão"
              id="cardFlag"
              v-model="card.flag"
              :error="errors.flag ? errors.flag[0] : ''"
            />
          </div>

          <InputWithLabel
            label="Dono do cartão"
            id="cardOwner"
            v-model="card.owner_name"
            :error="errors.owner_name ? errors.owner_name[0] : ''"
          />

          <InputWithLabel
            label="Número do cartão"
            id="cardNumber"
            v-model="card.number"
            v-maska="'#### #### #### ####'"
            :error="errors.number ? errors.number[0] : ''"
          />

          <div class="md:flex justify-between">
            <InputWithLabel
              class="w-60"
              label="Membro desde"
              id="cardMemberSince"
              v-model="card.member_since"
              v-maska="'##/##'"
              :error="errors.member_since ? errors.member_since[0] : ''"
            />

            <InputWithLabel
              class="w-60"
              label="Válido até"
              id="cardValidThru"
              v-model="card.valid_thru"
              v-maska="'##/##'"
              :error="errors.valid_thru ? errors.valid_thru[0] : ''"
            />

            <InputWithLabel
              class="w-60"
              label="Código de segurança"
              id="cardSecutiryCode"
              v-model="card.security_code"
              v-maska="'###'"
              :error="errors.security_code ? errors.security_code[0] : ''"
            />
          </div>
        </main>

        <footer v-if="edit">
          <Button class="w-full my-5 md:w-max mr-4">Atualizar Cartão</Button>
        </footer>

        <footer v-else>
          <Button class="w-full my-5 md:w-max mr-4">
            Salvar
          </Button>
          <Button class="w-full my-5 md:w-max" type="light">
            Salvar e criar outro
          </Button>
        </footer>
      </form>
    </main>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import storeTypes from '@/store/types';
import dialog from '@/utils/dialogs';
import components from './components';

export default {
  components,
  data: () => ({ edit: false }),

  computed: {
    ...mapGetters({
      cards: storeTypes.CREDIT_CARD_GET_CARDS,
      card: storeTypes.CREDIT_CARD_GET_CURRENT_CARD,
      errors: storeTypes.CREDIT_CARD_GET_ERRORS,
      error: storeTypes.CREDIT_CARD_GET_ERROR,
    }),
  },

  methods: {
    onSlideChange({ activeIndex }) {
      this.$store.commit(storeTypes.CREDIT_CARD_SET_CURRENT_CARD, this.cards.data[activeIndex]);
    },
  },

  async created() {
    dialog.loading();
    await this.$store.dispatch(storeTypes.CREDIT_CARD_PAGINATE);
    dialog.close();
  },
};
</script>

<style scoped>
.w-60 { max-width: 15rem; }
</style>
