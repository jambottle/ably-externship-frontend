import { mount, flushPromises } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';

import App from '@/App.vue';
import OrderCompletePage from '@/views/OrderComplete.vue';
import ItemListPage from '@/views/ItemList.vue';
import OrderRoutes from '@/router/OrderRoutes';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ItemListPage,
  },
  ...OrderRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

describe('OrderComplete.vue', () => {
  it('renders OrderCompletePage with linked button', () => {
    const wrapper = mount(OrderCompletePage, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.get('[data-test="order-wrapper"]').exists()).toBe(true);
    expect(wrapper.get('[data-test="order-router"] button').exists()).toBe(true);
  });

  it('routes to home page & renders ItemListPage when linked button is clicked', async () => {
    router.push('/order/complete');
    await router.isReady();

    const container = mount(App, {
      global: {
        plugins: [router],
      },
    });

    await container.get('[data-test="order-router"]').trigger('click');
    await flushPromises();

    expect(container.findComponent(ItemListPage).exists()).toBe(true);
  });
});
