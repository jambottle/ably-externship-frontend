import { mount } from '@vue/test-utils';
import ItemListCard from '@/components/ItemList/Card.vue';

describe('Card.vue', () => {
  const wrapper = mount(ItemListCard);

  it('renders profile image, name, discount rate and price of item', async () => {
    const testItemName = '아이언맨 마크 42';
    const testItemOriginalPrice = 5000000000;
    const testItemDiscountPrice = 4000000000;
    const testItemDiscountRate = 1 - (testItemDiscountPrice / testItemOriginalPrice);

    await wrapper.setData({
      item: {
        name: testItemName,
        price: {
          discount: testItemDiscountPrice,
          original: testItemOriginalPrice,
        },
      },
    });

    expect(wrapper.get('div[data-test="item-profile"]').exists()).toBe(true);
    expect(wrapper.get('h2[data-test="item-name"]').text()).toBe(testItemName);
    expect(wrapper.get('b[data-test="discount-rate"]').text()).toBe(`${Math.round(testItemDiscountRate * 100)}%`);
    expect(wrapper.get('span[data-test="discount-price"]').text()).toBe(`${testItemDiscountPrice.toLocaleString()}원`);
  });
});
