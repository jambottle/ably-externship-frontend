import { mount } from '@vue/test-utils';
import ItemInfo from '@/views/ItemInfo.vue';

describe('ItemInfo.vue', () => {
  const wrapper = mount(ItemInfo);

  it('renders profile image of item', () => {
    expect(wrapper.get('div[data-test="item-profile"]').exists()).toBe(true);
  });

  it('renders profile image, name and hashtags of shop', () => {
    expect(wrapper.get('div[data-test="shop-profile"]').exists()).toBe(true);
    expect(wrapper.get('b[data-test="shop-name"]').exists()).toBe(true);
    expect(wrapper.get('span[data-test="shop-tags"]').exists()).toBe(true);
  });

  it('renders discount rate, discount price and original price of item', () => {
    expect(wrapper.get('h2[data-test="item-name"]').exists()).toBe(true);
    expect(wrapper.get('b[data-test="discount-rate"]').exists()).toBe(true);
    expect(wrapper.get('span[data-test="discount-price"]').exists()).toBe(true);
    expect(wrapper.get('del[data-test="original-price"]').exists()).toBe(true);
  });

  it('has paragraph element for description of item', () => {
    expect(wrapper.get('p[data-test="item-desc"]').exists()).toBe(true);
  });

  it('displays reviews with post and attatched photo of each review', () => {
    expect(wrapper.get('b[data-test="review-name"]').exists()).toBe(true);
    expect(wrapper.get('span[data-test="review-date"]').exists()).toBe(true);
    expect(wrapper.get('h6[data-test="review-title"]').exists()).toBe(true);
    expect(wrapper.get('p[data-test="review-content"]').exists()).toBe(true);
    expect(wrapper.get('div[data-test="review-photo"]').exists()).toBe(true);
  });

  it('shows fixed footer with a button which contains discount price', () => {
    expect(wrapper.get('footer[data-test="footer-wrapper"]').exists()).toBe(true);
    expect(wrapper.get('button[data-test="footer-button"]').exists()).toBe(true);
  });

  it('fills empty like tag of shop by click event', async () => {
    await wrapper.setData({
      shop: { isLiked: false },
    });
    await wrapper.get('div[data-test="shop-liketag"]').trigger('click');

    expect(wrapper.get('svg[data-test="like-clicked"]').isVisible()).toBe(true);
  });

  it('shows modal with name and price of item by click event', async () => {
    await wrapper.setData({
      item: {
        name: '삼선 슬리퍼',
        price: { discount: 3000 },
      },
    });
    await wrapper.get('button[data-test="footer-button"]').trigger('click');

    expect(wrapper.get('div[class="modal-body"]').text()).toContain('삼선 슬리퍼');
    expect(wrapper.get('div[class="modal-body"]').text()).toContain('3,000원');
  });
});
