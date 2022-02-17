export default [
  {
    path: '/wish',
    name: 'WishListPage',
    component: () => import(/* webpackChunkName: "group-wish" */ '@/views/WishList.vue'),
    meta: { title: '찜한 상품 목록 조회' },
  },
];
