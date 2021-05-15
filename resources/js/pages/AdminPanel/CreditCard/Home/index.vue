<template>
  <div class="credit-card-page">
    <section class="max-w-screen-md pb-5 px-5">
      <Select />

      <form class="credit-card">
        <ErrorMessage error="Houve um erro no servidor, tente novamente mais tarde" />

        <header class="flex flex-col md:flex-row items-center">
          <div>
            <CreditCardSlider :cards="cards"/>
          </div>
          <h2 class="flex align-center mt-6 mb-8 md:ml-12 text-4xl font-medium text-gray-800">
            Nu Bank
          </h2>
        </header>

        <main>
          <Input label="Dono do cartão" />
          <Input label="Número do cartão" />

          <div class="md:flex justify-between">
            <Input label="Membro desde" />
            <Input label="Válido até" />
            <Input label="Código de segurança" />
          </div>
        </main>

        <footer>
          <Button class="w-full my-5 md:w-min block ml-auto">
            Salvar
          </Button>
        </footer>
      </form>
    </section>

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
    Input: defineAsyncComponent(() => import('@components/atoms/Input')),
    Button: defineAsyncComponent(() => import('@components/atoms/Button')),
    ErrorMessage: defineAsyncComponent(() => import('@components/atoms/ErrorMessage')),
    Select: defineAsyncComponent(() => import('@components/atoms/Select')),
  },
};
</script>
