import { mount } from '@vue/test-utils';
import ItemListCard from '@/components/ItemList/Card.vue';

const testItemInfo = {
  name: '아이언맨 마크 42',
  desc: '<p>원거리 탈착 기능이 탑재된 고성능 슈트</p>',
  discount_price: 4000000000,
  original_price: 5000000000,
};

describe('Card.vue', () => {
  it('renders profile image, name, discount rate and price of item', async () => {
    const wrapper = mount(ItemListCard);

    await wrapper.setProps({
      ...testItemInfo,
    });

    expect(wrapper.get('div[data-test="item-profile"]').exists()).toBe(true);
    expect(wrapper.get('b[data-test="discount-rate"]').text()).toBe(`${Math.round((1 - (testItemInfo.discount_price / testItemInfo.original_price)) * 100)}%`);
    expect(wrapper.get('span[data-test="discount-price"]').text()).toBe(`${testItemInfo.discount_price.toLocaleString()}원`);
    expect(wrapper.get('h2[data-test="item-name"]').text()).toBe(testItemInfo.name);
    expect(wrapper.get('p[data-test="item-desc"]').text()).toBe(testItemInfo.desc);
  });
});
