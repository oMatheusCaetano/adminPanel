<template>
  <PageWithSidebar>
    <div class="credit-card-page bg-gray-100 min-h-screen flex">
      <main class="max-w-4xl pb-5 px-5 pl-10 pt-8 bg-white rounded-lg shadow-xl">
        <Dropdown
          :options="[
            { label: 'Lista de Cartões', onSelected: loadCards },
            { label: 'Criar novo cartão', onSelected: selectCreateNewCardOption },
          ]"
        />

        <form class="credit-card">
          <header class="flex flex-col md:flex-row items-center relative">
            <div>
              <CreditCardSlider
                v-if="edit"
                :cards="cards.data"
                :onSlideChange="onSlideChange"
              />

              <div class="h-60 w-80 pl-4 pt-10" v-else>
                <CreditCard :card="card" />
              </div>
            </div>

            <TitleInput
              class="max-w-full my-3 mb-8 md:my-0 md:mb-0 text-center md:text-left md:ml-6"
              v-model="card.bank_name"
              placeholder="Insira o nome do banco"
              :error="errors.bank_name ? errors.bank_name[0] : ''"
            />

            <IconButton
              class="absolute right-0 md:top-5"
              v-if="edit"
              @click="removeCard()"
            >
              <TrashIcon class="text-red-500" />
            </IconButton>
          </header>

          <main>
            <div class="md:flex justify-between">
              <InputWithLabel
                class="md:w-56 lg:w-60"
                type="color"
                label="Cor do cartão"
                id="cardColor"
                v-model="card.color"
                :error="errors.color ? errors.color[0] : ''"
              />

              <InputWithLabel
              class="md:w-56 lg:w-60"
                type="color"
                label="Cor do texto"
                id="cardTextColor"
                v-model="card.text_color"
                :error="errors.text_color ? errors.text_color[0] : ''"
              />

              <InputWithLabel
              class="md:w-56 lg:w-60"
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
                class="md:w-56 lg:w-60"
                label="Membro desde"
                id="cardMemberSince"
                v-model="card.member_since"
                v-maska="'##/##'"
                :error="errors.member_since ? errors.member_since[0] : ''"
              />

              <InputWithLabel
                class="md:w-56 lg:w-60"
                label="Válido até"
                id="cardValidThru"
                v-model="card.valid_thru"
                v-maska="'##/##'"
                :error="errors.valid_thru ? errors.valid_thru[0] : ''"
              />

              <InputWithLabel
                class="md:w-56 lg:w-60"
                label="Código de segurança"
                id="cardSecutiryCode"
                v-model="card.security_code"
                v-maska="'###'"
                :error="errors.security_code ? errors.security_code[0] : ''"
              />
            </div>
          </main>

          <footer v-if="edit">
            <Button class="w-full my-5 md:w-max mr-4" @click.prevent="updateCard()">
              Atualizar Cartão
            </Button>
          </footer>

          <footer v-else>
            <Button class="w-full my-5 md:w-max mr-4" @click.prevent="createCard(false)">
              Salvar
            </Button>
            <Button
              class="w-full my-5 md:w-max"
              type="light"
              @click.prevent="createCard()"
            >
              Salvar e criar outro
            </Button>
          </footer>
        </form>
      </main>
    </div>
  </PageWithSidebar>
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
    selectCreateNewCardOption() {
      this.$store.commit(storeTypes.CREDIT_CARD_SET_CURRENT_CARD, {});
      this.$store.commit(storeTypes.CREDIT_CARD_SET_ERRORS, []);
      this.$store.commit(storeTypes.CREDIT_CARD_SET_ERROR, '');
      this.edit = false;
    },

    onSlideChange({ activeIndex }) {
      this.$store.commit(storeTypes.CREDIT_CARD_SET_CURRENT_CARD, this.cards.data[activeIndex]);
    },

    async loadCards() {
      dialog.loading();
      const { result } = await this.$store.dispatch(storeTypes.CREDIT_CARD_PAGINATE);
      if (!result) return dialog.error(this.error);
      this.edit = this.cards.data.length > 0;
      return dialog.close();
    },

    async removeCard() {
      const { isConfirmed } = await dialog.confirm('Quer excluir este cartão?');
      if (!isConfirmed) return dialog.error('', 'Operação cancelada', true);
      dialog.loading();
      const { result } = await this.$store.dispatch(storeTypes.CREDIT_CARD_DELETE);
      if (this.cards.data.length === 0) this.edit = false;
      return result ? dialog.success('Cartão removido com sucesso') : dialog.error(this.error);
    },

    async createCard(createAnotherCard = true) {
      dialog.loading();
      const { result, status } = await this.$store.dispatch(
        storeTypes.CREDIT_CARD_CREATE, { reload: !createAnotherCard, clearCard: createAnotherCard },
      );
      if (status === 422) return dialog.close();
      this.edit = !createAnotherCard;
      return result ? dialog.success('Cartão criado com sucesso') : dialog.error(this.error);
    },

    async updateCard() {
      dialog.loading();
      const { result, status } = await this.$store.dispatch(storeTypes.CREDIT_CARD_UPDATE);
      if (status === 422) return dialog.close();
      return result ? dialog.success('Cartão atualizado com sucesso') : dialog.error(this.error);
    },
  },

  created() {
    this.loadCards();
  },
};
</script>
