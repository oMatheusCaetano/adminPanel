<template>
  <div class="credit-card-page">
    <main class="max-w-4xl pb-5 px-5 pl-10 pt-8">
      <Select />

      <form class="credit-card">
        <header class="flex flex-col md:flex-row items-center relative">
          <div>
            <CreditCardSlider size="1.5x" :cards="cards" v-if="cards.length > 0" />

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

          <IconButton class="absolute top-5 right-5" v-if="edit">
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
          <Button class="w-full my-5 md:w-max" type="light">Cancelar Edição</Button>
        </footer>

        <footer v-else>
          <Button class="w-full my-5 md:w-max mr-4" @click.prevent="saveCreditCard()">
            Salvar
          </Button>
          <Button class="w-full my-5 md:w-max" type="light" @click.prevent="saveAndCreateAnother()">
            Salvar e criar outro
          </Button>
        </footer>
      </form>
    </main>
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue';
import api, { headers } from '@/services/api';
import Swal from 'sweetalert2';

export default {
  data: () => ({
    edit: false,
    error: '',
    message: '',
    errors: [],
    cards: [],
    card: {},
  }),

  methods: {
    async saveCreditCard() {
      await this.createCreditCard();
    },

    async saveAndCreateAnother() {
      const result = await this.createCreditCard();
      if (result) {
        this.successMessage();
        this.resetPage();
      }
    },

    async createCreditCard() {
      this.loadingMessage();
      try {
        await api.post('credit-card', this.card, headers);
        Swal.close();
        return true;
      } catch ({ response }) {
        if (response.status !== 422) {
          this.error = response?.data?.error ?? response?.data?.message;
          this.errorMessage();
        } else this.errors = response.data.errors;
        Swal.close();
        return false;
      }
    },

    successMessage() {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cartão criado com sucessso!',
        showConfirmButton: true,
        timer: 2000,
      });
    },

    errorMessage() {
      Swal.fire({
        icon: 'error',
        text: 'Something went wrong!',
      });
    },

    loadingMessage() {
      Swal.fire({
        title: 'Aguarde...',
        allowOutsideClick: false,
        width: 400,
        padding: '3em',
        showConfirmButton: false,
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `,
      });
    },

    resetPage() {
      this.edit = false;
      this.error = '';
      this.errors = [];
      this.cards = [];
      this.card = { color: 'purple', text_color: 'white' };
    },
  },

  created() {
    this.resetPage();
  },

  components: {
    TrashIcon: defineAsyncComponent(() => import('@heroicons/vue/outline/TrashIcon')),
    CreditCardSlider: defineAsyncComponent(() => import('@components/organisms/CreditCardSlider')),
    CreditCard: defineAsyncComponent(() => import('@components/molecules/CreditCard')),
    TitleInput: defineAsyncComponent(() => import('@components/atoms/TitleInput')),
    InputWithLabel: defineAsyncComponent(() => import('@components/atoms/InputWithLabel')),
    Button: defineAsyncComponent(() => import('@components/atoms/Button')),
    Select: defineAsyncComponent(() => import('@components/atoms/Select')),
    IconButton: defineAsyncComponent(() => import('@components/atoms/IconButton')),
  },
};
</script>

<style scoped>
.w-60 { max-width: 15rem; }
</style>
