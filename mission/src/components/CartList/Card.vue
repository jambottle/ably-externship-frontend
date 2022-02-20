<template>
  <article id="card">
    <router-link :to="`/item/${id}`" data-test="item-router">
      <div
        class="item-profile"
        data-test="item-profile"
        :style="`background-image: url(${profile})`"
      />

      <div>
        <p class="item-price">
          <b v-if="isDiscounted" data-test="discount-rate">
            {{ discountRate }}%
          </b>
          <span data-test="discount-price">{{ discountPrice }}원</span>
        </p>

        <h2 class="item-name" data-test="item-name">{{ name }}</h2>
      </div>
    </router-link>
  </article>
</template>

<script>
export default {
  name: 'CartListCard',

  props: {
    id: { type: String, default: '' },
    name: { type: String, default: '(미등록 상품)' },
    desc: { type: String, default: '(미등록 상품 설명란)' },
    discount_price: { type: Number, default: 0 },
    original_price: { type: Number, default: 0 },
    profile: {
      type: String,
      default: 'https://images.unsplash.com/photo-1570395623789-d9c9a31598a6',
    },
  },

  computed: {
    isDiscounted() {
      return (
        this.discount_price !== this.original_price && this.original_price !== 0
      );
    },
    discountRate() {
      const rate = 1 - this.discount_price / this.original_price;
      return Math.round(rate * 100);
    },
    discountPrice() {
      return this.discount_price.toLocaleString();
    },
  },
};
</script>

<style lang="scss" scoped>
#card {
  width: 100%;
  margin-top: 15px;
  border-radius: 20px;
  box-shadow: 5px 5px 5px lightgray;
  padding: 10px 5px 15px 25px;
  cursor: pointer;

  a {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2, 50%);
    grid-auto-flow: row;

    text-decoration: none;

    .item-profile {
      width: 150px;
      height: 150px;
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
  }
}
</style>
