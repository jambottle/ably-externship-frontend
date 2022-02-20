import { mount, flushPromises } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';

import ItemListPage from '@/views/ItemList.vue';
import CartListPage from '@/views/CartList.vue';
import CartListCard from '@/components/CartList/Card.vue';
import CartRepository from '@/repositories/CartRepository';
import CartRoutes from '@/router/ItemRoutes';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ItemListPage,
  },
  ...CartRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const testCartList = [
  { name: 'name 1', description: 'description 1', price: 13400 },
  { name: 'name 2', description: 'description 2', price: 24500 },
  { name: 'name 3', description: 'description 3', price: 35600 },
];

describe('CartList.vue', () => {
  it('calls API to get items\' list', async () => {
    const response = {
      data: { cart_item: testCartList },
    };

    CartRepository.getCartList = jest.fn().mockResolvedValue(response);

    await CartRepository.getCartList();
    await flushPromises();

    expect(CartRepository.getCartList).toHaveBeenCalledTimes(1);
  });

  it('renders multiple CartListCard components', async () => {
    router.push('/');
    await router.isReady();

    const wrapper = mount(CartListPage, {
      global: {
        plugins: [router],
      },
    });

    await wrapper.setData({
      items: testCartList,
    });

    const listWrapper = wrapper.findAllComponents(CartListCard);

    expect(listWrapper).toHaveLength(testCartList.length);

    for (let i = 0; i < testCartList.length; i += 1) {
      const cardWrapper = listWrapper[i];

      expect(cardWrapper.get('span[data-test="discount-price"]').text()).toBe(`${testCartList[i].price.toLocaleString()}원`);
      expect(cardWrapper.get('h2[data-test="item-name"]').text()).toBe(testCartList[i].name);
      expect(cardWrapper.get('p[data-test="item-desc"]').text()).toBe(testCartList[i].description);
    }
  });
});
