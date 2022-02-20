export default [
  {
    path: '/order',
    name: 'OrderCheckoutPage',
    component: () => import(/* webpackChunkName: "group-order" */ '@/views/OrderCheckout.vue'),
    meta: { title: '상품 주문 및 결제' },
  },
  {
    path: '/order/complete',
    name: 'OrderCompletePage',
    component: () => import(/* webpackChunkName: "group-order" */ '@/views/OrderComplete.vue'),
    meta: { title: '상품 주문 및 결제 완료' },
  },
];
