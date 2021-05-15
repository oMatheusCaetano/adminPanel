export default [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home-page" */ '@pages/Home'),
  },

  {
    path: '/adminPanel/credit-card',
    name: 'AdminPanelCreditCard',
    component: () => import(/* webpackChunkName: "creditCard-page" */ '@pages/AdminPanel/CreditCard/Home'),
  },
];
