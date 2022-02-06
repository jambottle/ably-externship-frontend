<template>
  <article id="review">
    <div class="review-post">
      <b data-test="review-name">{{ review.writer }}</b>
      <span data-test="review-date">{{ review.created }}</span>
      <h6 data-test="review-title">{{ review.title }}</h6>
      <p data-test="review-content">{{ review.content }}</p>
    </div>
    <div
      class="review-photo"
      data-test="review-photo"
      :style="`background-image: url(${review.img})`"
    />
  </article>
</template>

<script>
export default {
  name: 'ItemInfoReview',

  props: {
    review: Object,
  },
};
</script>

<style lang="scss" scoped>
#review {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  .review-post {
    width: 64%;
    font-size: 16px;

    span {
      margin-left: 8px;
      color: gray;
      font-size: 15px;
      vertical-align: top;
    }

    h6 {
      margin: 2px 0;
      font-size: 18px;
      font-weight: bold;
    }

    p {
      font-size: 16px;
    }
  }

  .review-photo {
    width: 120px;
    height: 120px;
    border: 1px solid lightgray;
    background-position: center;
    background-size: cover;
  }
}
</style>
