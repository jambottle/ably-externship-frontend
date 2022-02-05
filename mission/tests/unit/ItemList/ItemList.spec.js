import { mount } from '@vue/test-utils';
import ItemList from '@/views/ItemList.vue';
import ItemListCard from '@/components/ItemList/Card.vue';

const testItemList = [
  { name: 'name 1', desc: 'description 1', price: { discount: 13400 } },
  { name: 'name 2', desc: 'description 2', price: { discount: 24500 } },
  { name: 'name 3', desc: 'description 3', price: { discount: 35600 } },
];

describe('ItemList.vue', () => {
  it('renders multiple ItemListCard components', async () => {
    const wrapper = mount(ItemList);

    await wrapper.setData({
      items: testItemList,
    });

    const listWrapper = wrapper.findAllComponents(ItemListCard);

    expect(listWrapper).toHaveLength(testItemList.length);

    for (let i = 0; i < testItemList.length; i += 1) {
      const cardWrapper = listWrapper[i];

      expect(cardWrapper.get('span[data-test="discount-price"]').text()).toBe(`${testItemList[i].price.discount.toLocaleString()}원`);
      expect(cardWrapper.get('h2[data-test="item-name"]').text()).toBe(testItemList[i].name);
      expect(cardWrapper.get('p[data-test="item-desc"]').text()).toBe(testItemList[i].desc);
    }
  });
});
