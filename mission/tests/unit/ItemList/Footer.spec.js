import { mount } from '@vue/test-utils';
import ItemListFooter from '@/components/ItemList/Footer.vue';

describe('Footer.vue', () => {
  it('renders nav element with links', () => {
    const wrapper = mount(ItemListFooter);

    expect(wrapper.get('nav[data-test="footer-wrapper"]').exists()).toBe(true);
    expect(wrapper.get('nav[data-test="footer-wrapper"] router-link').exists()).toBe(true);
  });
});
