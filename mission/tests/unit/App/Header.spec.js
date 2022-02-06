import { mount } from '@vue/test-utils';
import AppHeader from '@/components/App/Header.vue';

describe('Header.vue', () => {
  it('renders header element with title', () => {
    const wrapper = mount(AppHeader);

    expect(wrapper.get('header[data-test="header-wrapper"]').exists()).toBe(true);
    expect(wrapper.get('header[data-test="header-wrapper"] h1').exists()).toBe(true);
  });
});
