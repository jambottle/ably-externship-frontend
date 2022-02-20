import ItemListPage from '@/views/ItemList.vue';
import ItemInfoPage from '@/views/ItemInfo.vue';

export default [
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
];
