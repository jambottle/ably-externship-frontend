import { mount, flushPromises } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';

import App from '@/App.vue';
import AppHeader from '@/components/App/Header.vue';
import ItemListPage from '@/views/ItemList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ItemListPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

describe('Header.vue', () => {
  it('renders header element with linked title', () => {
    const wrapper = mount(AppHeader);

    expect(wrapper.get('[data-test="header-wrapper"]').exists()).toBe(true);
    expect(wrapper.get('[data-test="header-router"] h1').exists()).toBe(true);
  });

  it('routes to ItemListPage when linked title is clicked', async () => {
    router.push('/');
    await router.isReady();

    const container = mount(App, {
      global: {
        plugins: [router],
      },
    });

    await container.get('[data-test="header-router"]').trigger('click');
    await flushPromises();

    expect(container.findComponent(ItemListPage).exists()).toBe(true);
  });
});
