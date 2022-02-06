import { mount } from '@vue/test-utils';
import AppFooter from '@/components/App/Footer.vue';

describe('Footer.vue', () => {
  it('renders nav element with links', () => {
    const wrapper = mount(AppFooter);

    expect(wrapper.get('nav[data-test="footer-wrapper"]').exists()).toBe(true);
    expect(wrapper.get('nav[data-test="footer-wrapper"] router-link').exists()).toBe(true);
  });
});
