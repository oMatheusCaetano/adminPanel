<template>
  <div class="credit-card-page flex">
    <aside>
      <header>Logo AdminPanel</header>

      <main>
        <ul>
          <li>
            <router-link :to="{ name: 'AdminPanelCreditCard' }">
              Cartões de Crédito
            </router-link>
          </li>
        </ul>
      </main>

      <footer></footer>
    </aside>

    <section class="w-full">
      <nav class=" h-20"></nav>

      <main class="max-w-4xl pb-5 px-5 pl-10 pt-8">
        <Select />

        <form class="credit-card">
          <ErrorMessage error="Houve um erro no servidor, tente novamente mais tarde" />

          <header class="flex flex-col md:flex-row items-center relative">
            <div>
              <CreditCardSlider  size="1.5x" :cards="cards"/>
            </div>
            <h2 class="flex align-center mt-6 mb-8 md:ml-12 text-4xl font-medium text-gray-800">
              Nu Bank
            </h2>
            <IconButton class="absolute top-5 right-5">
              <TrashIcon class="text-red-500" />
            </IconButton>
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

          <footer class="flex justify-between">
            <Button class="w-full my-5 md:w-max" type="light">
              Cancelar Edição
            </Button>
            <Button class="w-full my-5 md:w-max">
              Salvar
            </Button>
          </footer>
        </form>
      </main>
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
    TrashIcon: defineAsyncComponent(() => import('@heroicons/vue/outline/TrashIcon')),
    CreditCardSlider: defineAsyncComponent(() => import('@components/organisms/CreditCardSlider')),
    Input: defineAsyncComponent(() => import('@components/atoms/Input')),
    Button: defineAsyncComponent(() => import('@components/atoms/Button')),
    ErrorMessage: defineAsyncComponent(() => import('@components/atoms/ErrorMessage')),
    Select: defineAsyncComponent(() => import('@components/atoms/Select')),
    IconButton: defineAsyncComponent(() => import('@components/atoms/IconButton')),
  },
};
</script>
