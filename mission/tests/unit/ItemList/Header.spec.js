import { mount } from '@vue/test-utils';
import ItemListHeader from '@/components/ItemList/Header.vue';

describe('Header.vue', () => {
  it('renders header element with title', () => {
    const wrapper = mount(ItemListHeader);

    expect(wrapper.get('header[data-test="header-wrapper"]').exists()).toBe(true);
    expect(wrapper.get('header[data-test="header-wrapper"] h1').exists()).toBe(true);
  });
});
