import { mount } from '@vue/test-utils';
import ItemInfo from '@/views/ItemInfo.vue';

describe('ItemInfo.vue', () => {
  const wrapper = mount(ItemInfo);

  it('renders profile images of item and shop', () => {
    expect(wrapper.get('div[data-test="item-profile"]').exists()).toBe(true);
    expect(wrapper.get('div[data-test="shop-profile"]').exists()).toBe(true);
  });

  it('renders name and hashtags of shop', async () => {
    const testShopName = '대한양복';
    const testShopTags = ['남성', '수트'];

    await wrapper.setData({
      shop: {
        name: testShopName,
        tags: testShopTags,
      },
    });

    expect(wrapper.get('b[data-test="shop-name"]').text()).toBe(testShopName);
    expect(wrapper.get('span[data-test="shop-tags"]').text()).toContain(testShopTags[0]);
  });

  it('fills empty like tag of shop by click event', async () => {
    await wrapper.setData({
      shop: { isLiked: false },
    });
    await wrapper.get('div[data-test="shop-liketag"]').trigger('click');

    expect(wrapper.get('svg[data-test="like-clicked"]').isVisible()).toBe(true);
  });

  it('renders name, discount rate, discount price and original price of item', async () => {
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

    expect(wrapper.get('h2[data-test="item-name"]').text()).toBe(testItemName);
    expect(wrapper.get('b[data-test="discount-rate"]').text()).toBe(`${Math.round(testItemDiscountRate * 100)}%`);
    expect(wrapper.get('span[data-test="discount-price"]').text()).toBe(`${testItemDiscountPrice.toLocaleString()}원`);
    expect(wrapper.get('del[data-test="original-price"]').text()).toBe(`${testItemOriginalPrice.toLocaleString()}원`);
  });

  it('has paragraph element for description of item', async () => {
    const testItemDesc = '<p>test description</p>';

    await wrapper.setData({
      item: {
        desc: testItemDesc,
      },
    });

    expect(wrapper.get('p[data-test="item-desc"]').html()).toContain(testItemDesc);
  });

  it('displays reviews with post and attatched photo of each review', async () => {
    const testReviews = [{
      user: {
        name: 'Cristian Romero',
      },
      post: {
        date: '2022. 01. 17',
        title: 'test review title',
        content: 'test review content',
        photo: '',
      },
    }];

    await wrapper.setData({
      reviews: testReviews,
    });

    for (let i = 0; i < testReviews.length; i += 1) {
      expect(wrapper.get('b[data-test="review-name"]').text()).toBe(testReviews[i].user.name);
      expect(wrapper.get('span[data-test="review-date"]').text()).toBe(testReviews[i].post.date);
      expect(wrapper.get('h6[data-test="review-title"]').text()).toBe(testReviews[i].post.title);
      expect(wrapper.get('p[data-test="review-content"]').text()).toBe(testReviews[i].post.content);
      expect(wrapper.get('div[data-test="review-photo"]').exists()).toBe(true);
    }
  });

  it('shows fixed footer with a button which contains discount price', async () => {
    const testItemDiscountPrice = 3000;

    await wrapper.setData({
      item: {
        price: { discount: testItemDiscountPrice },
      },
    });

    expect(wrapper.get('footer[data-test="footer-wrapper"]').exists()).toBe(true);
    expect(wrapper.get('button[data-test="footer-button"]').text()).toBe(`${testItemDiscountPrice.toLocaleString()}원 구매`);
  });

  it('shows modal with name and price of item by click event', async () => {
    const testItemName = '삼선 슬리퍼';
    const testItemDiscountPrice = 3000;

    await wrapper.setData({
      item: {
        name: testItemName,
        price: { discount: testItemDiscountPrice },
      },
    });
    await wrapper.get('button[data-test="footer-button"]').trigger('click');

    expect(wrapper.get('div[class="modal-body"]').text()).toContain(testItemName);
    expect(wrapper.get('div[class="modal-body"]').text()).toContain(`${testItemDiscountPrice.toLocaleString()}원`);
  });
});
