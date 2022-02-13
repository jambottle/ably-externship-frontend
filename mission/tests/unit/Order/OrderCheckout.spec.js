import { mount, flushPromises } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';

import App from '@/App.vue';
import OrderCheckoutPage from '@/views/OrderCheckout.vue';
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

describe('OrderCheckout.vue', () => {
  it('renders OrderCheckoutPage with linked button', () => {
    const wrapper = mount(OrderCheckoutPage, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.get('[data-test="order-wrapper"]').exists()).toBe(true);
    expect(wrapper.get('[data-test="order-router"] button').exists()).toBe(true);
  });

  it('routes to OrderCompletePage when linked button is clicked', async () => {
    router.push('/order');
    await router.isReady();

    const container = mount(App, {
      global: {
        plugins: [router],
      },
    });

    await container.get('[data-test="order-router"]').trigger('click');
    await flushPromises();

    expect(container.findComponent(OrderCompletePage).exists()).toBe(true);
  });
});
