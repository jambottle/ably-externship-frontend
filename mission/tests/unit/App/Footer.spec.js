import { mount, flushPromises } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';

import App from '@/App.vue';
import AppFooter from '@/components/App/Footer.vue';
import footerData from '@/assets/footerData';

import ItemListPage from '@/views/ItemList.vue';
import WishListPage from '@/views/WishList.vue';
import CartListPage from '@/views/CartList.vue';
import UserInfoPage from '@/views/UserInfo.vue';

import WishRoutes from '@/router/WishRoutes';
import CartRoutes from '@/router/CartRoutes';
import InfoRoutes from '@/router/InfoRoutes';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ItemListPage,
  },
  ...WishRoutes,
  ...CartRoutes,
  ...InfoRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

describe('Footer.vue', () => {
  it('renders nav element with linked icons', () => {
    const wrapper = mount(AppFooter);

    expect(wrapper.get('[data-test="footer-wrapper"]').exists()).toBe(true);
    expect(wrapper.get('[data-test="footer-router"] svg').exists()).toBe(true);
  });

  it('renders multiple navigation icons', async () => {
    const wrapper = mount(AppFooter);

    await wrapper.setData({
      links: footerData,
    });

    const listWrapper = wrapper.findAll('[data-test="footer-router"]');

    expect(listWrapper).toHaveLength(footerData.length);

    for (let i = 0; i < footerData.length; i += 1) {
      const linkWrapper = listWrapper[i];

      expect(linkWrapper.get('[data-test="footer-router"] svg').exists()).toBe(true);
    }
  });

  it('routes to ItemListPage when home icon is clicked', async () => {
    router.push('/');
    await router.isReady();

    const container = mount(App, {
      global: {
        plugins: [router],
      },
    });

    await container.get('[data-test="footer-router-1"]').trigger('click');
    await flushPromises();

    expect(container.findComponent(ItemListPage).exists()).toBe(true);
  });

  it('routes to WishListPage when wish icon is clicked', async () => {
    router.push('/');
    await router.isReady();

    const container = mount(App, {
      global: {
        plugins: [router],
      },
    });

    await container.get('[data-test="footer-router-2"]').trigger('click');
    await flushPromises();

    expect(container.findComponent(WishListPage).exists()).toBe(true);
  });

  it('routes to CartListPage when cart icon is clicked', async () => {
    router.push('/');
    await router.isReady();

    const container = mount(App, {
      global: {
        plugins: [router],
      },
    });

    await container.get('[data-test="footer-router-3"]').trigger('click');
    await flushPromises();

    expect(container.findComponent(CartListPage).exists()).toBe(true);
  });

  it('routes to UserInfoPage when info icon is clicked', async () => {
    router.push('/');
    await router.isReady();

    const container = mount(App, {
      global: {
        plugins: [router],
      },
    });

    await container.get('[data-test="footer-router-4"]').trigger('click');
    await flushPromises();

    expect(container.findComponent(UserInfoPage).exists()).toBe(true);
  });
});
