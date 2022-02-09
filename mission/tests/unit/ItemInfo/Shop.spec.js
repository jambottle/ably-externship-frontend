import { mount } from '@vue/test-utils';
import ItemInfoShop from '@/components/ItemInfo/Shop.vue';

const testShopInfo = {
  name: '캡틴 아메리카 방패',
  tags: ['비브라늄', '고강도'],
  isLiked: false,
};

describe('Shop.vue', () => {
  it('renders profile image, name and hashtags of shop', async () => {
    const wrapper = mount(ItemInfoShop);

    await wrapper.setProps({
      ...testShopInfo,
    });

    expect(wrapper.get('div[data-test="shop-profile"]').exists()).toBe(true);
    expect(wrapper.get('b[data-test="shop-name"]').text()).toBe(testShopInfo.name);
    expect(wrapper.get('span[data-test="shop-tags"]').text()).toContain(testShopInfo.tags[0]);
  });
});
