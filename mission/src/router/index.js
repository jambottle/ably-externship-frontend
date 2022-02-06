import { createRouter, createWebHistory } from 'vue-router';
import ItemListPage from '@/views/ItemList.vue';
import ItemInfoPage from '@/views/ItemInfo.vue';
import WishListPage from '@/views/WishList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ItemListPage,
  },
  {
    path: '/item',
    name: 'ItemListPage',
    component: ItemListPage,
    meta: { title: '상품 목록 조회' },
  },
  {
    path: '/item/:itemNo',
    name: 'ItemInfoPage',
    component: ItemInfoPage,
    meta: { title: '상품 상세 정보 조회' },
  },
  {
    path: '/wish',
    name: 'WishListPage',
    component: WishListPage,
    meta: { title: '찜한 상품 목록 조회' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
