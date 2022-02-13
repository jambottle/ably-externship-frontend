import { mount, flushPromises } from '@vue/test-utils';

import ItemInfoPage from '@/views/ItemInfo.vue';
import ItemInfoReview from '@/components/ItemInfo/Review.vue';
import ItemRepository from '@/repositories/ItemRepository';

const testItemInfo = {
  name: '아이언맨 마크 42',
  description: '<p>원거리 탈착 기능이 탑재된 고성능 슈트</p>',
  price: 4000000000,
  original_price: 5000000000,
  reviews: [
    { writer: 'writer 1', title: 'title 1', content: 'content 1' },
    { writer: 'writer 2', title: 'title 2', content: 'content 2' },
    { writer: 'writer 3', title: 'title 3', content: 'content 3' },
  ],
};

describe('ItemInfo.vue', () => {
  it('calls API to get item\'s info', async () => {
    const response = {
      data: { item: testItemInfo },
    };

    ItemRepository.getItemInfo = jest.fn().mockResolvedValue(response);

    await ItemRepository.getItemInfo();
    await flushPromises();

    expect(ItemRepository.getItemInfo).toHaveBeenCalledTimes(1);
  });

  it('renders profile image of item', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.get('[data-test="item-profile"]').exists()).toBe(true);
  });

  it('fills empty like tag of shop by click event', async () => {
    const wrapper = mount(ItemInfoPage);

    await wrapper.get('[data-test="shop-liketag"]').trigger('click');

    expect(wrapper.get('[data-test="like-clicked"]').isVisible()).toBe(true);
  });

  it('renders name, discount rate, discount price and original price of item', async () => {
    const wrapper = mount(ItemInfoPage);

    await wrapper.setData({
      item: testItemInfo,
    });

    expect(wrapper.get('[data-test="item-name"]').text()).toBe(testItemInfo.name);
    expect(wrapper.get('[data-test="discount-rate"]').text()).toBe(`${Math.round((1 - (testItemInfo.price / testItemInfo.original_price)) * 100)}%`);
    expect(wrapper.get('[data-test="discount-price"]').text()).toBe(`${testItemInfo.price.toLocaleString()}원`);
    expect(wrapper.get('[data-test="original-price"]').text()).toBe(`${testItemInfo.original_price.toLocaleString()}원`);
  });

  it('has paragraph element for description of item', async () => {
    const wrapper = mount(ItemInfoPage);

    await wrapper.setData({
      item: testItemInfo,
    });

    expect(wrapper.get('[data-test="item-desc"]').html()).toContain(testItemInfo.description);
  });

  it('renders multiple ItemInfoReview components', async () => {
    const wrapper = mount(ItemInfoPage);

    await wrapper.setData({
      item: testItemInfo,
    });

    const listWrapper = wrapper.findAllComponents(ItemInfoReview);

    expect(listWrapper).toHaveLength(testItemInfo.reviews.length);

    for (let i = 0; i < testItemInfo.reviews.length; i += 1) {
      const reviewWrapper = listWrapper[i];

      expect(reviewWrapper.get('[data-test="review-name"]').text()).toBe(testItemInfo.reviews[i].writer);
      expect(reviewWrapper.get('[data-test="review-title"]').text()).toBe(testItemInfo.reviews[i].title);
      expect(reviewWrapper.get('[data-test="review-content"]').text()).toBe(testItemInfo.reviews[i].content);
    }
  });

  it('shows fixed footer with a button which contains discount price', async () => {
    const wrapper = mount(ItemInfoPage);

    await wrapper.setData({
      item: testItemInfo,
    });

    expect(wrapper.get('[data-test="footer-wrapper"]').exists()).toBe(true);
    expect(wrapper.get('[data-test="footer-button"]').text()).toContain(`${testItemInfo.price.toLocaleString()}원`);
  });

  it('shows modal with name and price of item by click event', async () => {
    const wrapper = mount(ItemInfoPage);

    await wrapper.setData({
      item: testItemInfo,
    });
    await wrapper.get('[data-test="footer-button"]').trigger('click');

    expect(wrapper.get('div[class="modal-body"]').text()).toContain(testItemInfo.name);
    expect(wrapper.get('div[class="modal-body"]').text()).toContain(`${testItemInfo.price.toLocaleString()}원`);
  });
});
