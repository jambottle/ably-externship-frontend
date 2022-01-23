import { mount } from '@vue/test-utils';
import ItemList from '@/views/ItemList.vue';

describe('ItemList.vue', () => {
  const wrapper = mount(ItemList);

  it('redners header element', () => {
    expect(wrapper.get('header[data-test="header-wrapper"]').exists()).toBe(true);
  });

  it('redners nav element', () => {
    expect(wrapper.get('nav[data-test="footer-wrapper"]').exists()).toBe(true);
  });
});
