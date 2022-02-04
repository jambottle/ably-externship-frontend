<template>
  <article id="card">
    <div
      class="item-profile"
      data-test="item-profile"
      :style="`background-image: url(${item.profile})`"
    />

    <p v-if="isDiscounted" class="item-price">
      <b data-test="discount-rate">{{ discountRate }}%&nbsp;</b>
      <span data-test="discount-price">{{ discountPrice }}원</span>
    </p>
    <p v-else class="item-price">
      <span data-test="discount-price">{{ discountPrice }}원</span>
    </p>

    <h2 class="item-name" data-test="item-name">{{ item.name }}</h2>
    <p class="item-desc">상품 설명이 길어질 경우에는 다음과 같이 표시됩니다.</p>
  </article>
</template>

<script>
export default {
  name: 'ItemListCard',

  props: {
    item: Object,
  },

  computed: {
    isDiscounted() {
      return this.item.price.discount !== this.item.price.original;
    },
    discountRate() {
      const rate = 1 - this.item.price.discount / this.item.price.original;
      return Math.round(rate * 100);
    },
    discountPrice() {
      return this.item.price.discount.toLocaleString();
    },
    originalPrice() {
      return this.item.price.original.toLocaleString();
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
