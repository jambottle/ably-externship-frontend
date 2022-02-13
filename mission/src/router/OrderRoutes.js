import OrderCheckoutPage from '../views/OrderCheckout.vue';
import OrderCompletePage from '../views/OrderComplete.vue';

export default [
  {
    path: '/order',
    name: 'OrderCheckoutPage',
    component: OrderCheckoutPage,
    meta: { title: '상품 주문 및 결제' },
  },
  {
    path: '/order/complete',
    name: 'OrderCompletePage',
    component: OrderCompletePage,
    meta: { title: '상품 주문 및 결제 완료' },
  },
];
