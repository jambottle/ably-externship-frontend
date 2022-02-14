import { mount, flushPromises } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';

import App from '@/App.vue';
import CartListCard from '@/components/CartList/Card.vue';
import ItemListPage from '@/views/ItemList.vue';
import ItemInfoPage from '@/views/ItemInfo.vue';
import CartRoutes from '@/router/CartRoutes';

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

const testItemInfo = {
  name: '아이언맨 마크 42',
  desc: '<p>원거리 탈착 기능이 탑재된 고성능 슈트</p>',
  discount_price: 4000000000,
  original_price: 5000000000,
};

describe('Card.vue', () => {
  it('renders profile image, name, discount rate and price of item', async () => {
    const wrapper = mount(CartListCard, {
      global: {
        plugins: [router],
      },
    });

    await wrapper.setProps({
      ...testItemInfo,
    });

    expect(wrapper.get('[data-test="item-profile"]').exists()).toBe(true);
    expect(wrapper.get('[data-test="discount-rate"]').text()).toBe(`${Math.round((1 - (testItemInfo.discount_price / testItemInfo.original_price)) * 100)}%`);
    expect(wrapper.get('[data-test="discount-price"]').text()).toBe(`${testItemInfo.discount_price.toLocaleString()}원`);
    expect(wrapper.get('[data-test="item-name"]').text()).toBe(testItemInfo.name);
  });

  it('routes to ItemInfoPage when the card is clicked', async () => {
    router.push('/');
    await router.isReady();

    const container = mount(App, {
      global: {
        plugins: [router],
      },
    });

    setTimeout(async () => {
      await container.get('[data-test="item-router"]').trigger('click');
      await flushPromises();

      expect(container.findComponent(ItemInfoPage).exists()).toBe(true);
    }, 500);
  });
});
