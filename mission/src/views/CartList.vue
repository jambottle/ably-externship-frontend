<template>
  <main id="cart-list">
    <CartListCard
      v-for="item in cartList"
      :key="item.product_no"
      :id="item.product_no"
      :name="item.name"
      :desc="item.description"
      :discount_price="item.price"
      :original_price="item.original_price"
      :profile="item.image"
    />

    <router-link to="/order" data-test="cart-router">
      <button
        class="w3-orange w3-xlarge w3-round-large w3-padding w3-text-white"
        data-test="cart-button"
      >
        <strong>🛍 구매하기</strong>
      </button>
    </router-link>
  </main>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import CartListCard from '@/components/CartList/Card.vue';

const { mapState } = createNamespacedHelpers('cart');

export default {
  name: 'CartListPage',

  components: {
    CartListCard,
  },

  computed: {
    ...mapState(['cartList']),
  },
};
</script>

<style lang="scss" scoped>
#cart-list {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(1, 95%);
  grid-auto-flow: row;

  max-width: 512px;
  margin: 0 auto 84px;
  text-align: left;

  a {
    width: 100%;
    max-width: 150px;
    margin: 0 auto;
    text-decoration: none;

    button {
      display: block;
      margin: 8px auto;
      border: 0;
      box-shadow: 4px 4px lightgray;
      cursor: pointer;

      strong {
        font-weight: bold;
      }
    }
  }
}
</style>
