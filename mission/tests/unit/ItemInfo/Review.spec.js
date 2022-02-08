import { mount } from '@vue/test-utils';
import ItemInfoReview from '@/components/ItemInfo/Review.vue';

const testReviewInfo = {
  writer: 'Cristian Romero',
  created: '2022. 01. 17',
  title: 'test review title',
  content: 'test review content',
};

describe('Review.vue', () => {
  it('displays reviews with post and attatched photo of each review', async () => {
    const wrapper = mount(ItemInfoReview);

    await wrapper.setProps({
      review: testReviewInfo,
    });

    expect(wrapper.get('b[data-test="review-name"]').text()).toBe(testReviewInfo.writer);
    expect(wrapper.get('span[data-test="review-date"]').text()).toBe(testReviewInfo.created);
    expect(wrapper.get('h6[data-test="review-title"]').text()).toBe(testReviewInfo.title);
    expect(wrapper.get('p[data-test="review-content"]').text()).toBe(testReviewInfo.content);
    expect(wrapper.get('div[data-test="review-photo"]').exists()).toBe(true);
  });
});
