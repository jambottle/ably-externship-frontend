import { mount } from '@vue/test-utils';
import ItemListCard from '@/components/ItemList/Card.vue';

const testItemName = '아이언맨 마크 42';
const testItemDesc = '원거리 탈착 기능이 탑재된 고성능 슈트';
const testItemOriginalPrice = 5000000000;
const testItemDiscountPrice = 4000000000;
const testItemDiscountRate = 1 - (testItemDiscountPrice / testItemOriginalPrice);

describe('Card.vue', () => {
  it('renders profile image, name, discount rate and price of item', async () => {
    const wrapper = mount(ItemListCard);

    await wrapper.setProps({
      name: testItemName,
      desc: testItemDesc,
      discount_price: testItemDiscountPrice,
      original_price: testItemOriginalPrice,
    });

    expect(wrapper.get('div[data-test="item-profile"]').exists()).toBe(true);
    expect(wrapper.get('b[data-test="discount-rate"]').text()).toBe(`${Math.round(testItemDiscountRate * 100)}%`);
    expect(wrapper.get('span[data-test="discount-price"]').text()).toBe(`${testItemDiscountPrice.toLocaleString()}원`);
    expect(wrapper.get('h2[data-test="item-name"]').text()).toBe(testItemName);
    expect(wrapper.get('p[data-test="item-desc"]').text()).toBe(testItemDesc);
  });
});
