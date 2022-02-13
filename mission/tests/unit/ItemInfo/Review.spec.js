import { mount } from '@vue/test-utils';
import ItemInfoReview from '@/components/ItemInfo/Review.vue';

const testReviewInfo = {
  writer: 'Cristian Romero',
  title: 'test review title',
  content: 'test review content',
  created: '2022. 01. 17',
};

describe('Review.vue', () => {
  it('displays reviews with post and attatched photo of each review', async () => {
    const wrapper = mount(ItemInfoReview);

    await wrapper.setProps({
      review: testReviewInfo,
    });

    expect(wrapper.get('[data-test="review-name"]').text()).toBe(testReviewInfo.writer);
    expect(wrapper.get('[data-test="review-date"]').text()).toBe(testReviewInfo.created);
    expect(wrapper.get('[data-test="review-title"]').text()).toBe(testReviewInfo.title);
    expect(wrapper.get('[data-test="review-content"]').text()).toBe(testReviewInfo.content);
    expect(wrapper.get('[data-test="review-photo"]').exists()).toBe(true);
  });
});
