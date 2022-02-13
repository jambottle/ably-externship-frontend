import { mount, flushPromises } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';

import ItemListPage from '@/views/ItemList.vue';
import ItemListCard from '@/components/ItemList/Card.vue';
import ItemRepository from '@/repositories/ItemRepository';
import ItemRoutes from '@/router/ItemRoutes';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ItemListPage,
  },
  ...ItemRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const testItemList = [
  { name: 'name 1', description: 'description 1', price: 13400 },
  { name: 'name 2', description: 'description 2', price: 24500 },
  { name: 'name 3', description: 'description 3', price: 35600 },
];

describe('ItemList.vue', () => {
  it('calls API to get items\' list', async () => {
    const response = {
      data: { items: testItemList },
    };

    ItemRepository.getItemList = jest.fn().mockResolvedValue(response);

    await ItemRepository.getItemList();
    await flushPromises();

    expect(ItemRepository.getItemList).toHaveBeenCalledTimes(1);
  });

  it('renders multiple ItemListCard components', async () => {
    router.push('/');
    await router.isReady();

    const wrapper = mount(ItemListPage, {
      global: {
        plugins: [router],
      },
    });

    await wrapper.setData({
      items: testItemList,
    });

    const listWrapper = wrapper.findAllComponents(ItemListCard);

    expect(listWrapper).toHaveLength(testItemList.length);

    for (let i = 0; i < testItemList.length; i += 1) {
      const cardWrapper = listWrapper[i];

      expect(cardWrapper.get('span[data-test="discount-price"]').text()).toBe(`${testItemList[i].price.toLocaleString()}원`);
      expect(cardWrapper.get('h2[data-test="item-name"]').text()).toBe(testItemList[i].name);
      expect(cardWrapper.get('p[data-test="item-desc"]').text()).toBe(testItemList[i].description);
    }
  });
});
