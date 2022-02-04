<template>
  <article id="card">
    <div
      class="item-profile"
      data-test="item-profile"
      :style="`background-image: url(${profile})`"
    />

    <p v-if="isDiscounted" class="item-price">
      <b data-test="discount-rate">{{ discountRate }}%&nbsp;</b>
      <span data-test="discount-price">{{ discountPrice }}원</span>
    </p>
    <p v-else class="item-price">
      <span data-test="discount-price">{{ discountPrice }}원</span>
    </p>

    <h2 class="item-name" data-test="item-name">{{ name }}</h2>
    <p class="item-desc">{{ desc }}</p>
  </article>
</template>

<script>
export default {
  name: 'ItemListCard',

  props: {
    name: { type: String, default: '(미등록 상품)' },
    desc: { type: String, default: '(미등록 상품 설명란)' },
    price: {
      type: Object,
      default() {
        return { discount: 0, original: 0 };
      },
    },
    profile: {
      type: String,
      default: 'https://images.unsplash.com/photo-1570395623789-d9c9a31598a6',
    },
  },

  computed: {
    isDiscounted() {
      return this.price.discount !== this.price.original;
    },
    discountRate() {
      const rate = 1 - this.price.discount / this.price.original;
      return Math.round(rate * 100);
    },
    discountPrice() {
      return this.price.discount.toLocaleString();
    },
    originalPrice() {
      return this.price.original.toLocaleString();
    },
  },
};
</script>

<style lang="scss" scoped>
#card {
  width: 50%;

  .item-profile {
    width: 160px;
    height: 160px;
    margin: 12px 0 8px;
    background-position: center;
    background-size: cover;
  }

  .item-price {
    margin-top: 16px;

    b {
      color: red;
      font-size: 16px;
      font-weight: bold;
    }

    span {
      color: black;
      font-size: 16px;
      font-weight: bold;
    }
  }

  .item-name {
    margin: 6px 0;
    font-size: 18px;
    font-weight: bold;
  }

  .item-desc {
    width: 180px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
  }
}
</style>
